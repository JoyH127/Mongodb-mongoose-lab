const User = require("./models/user");
const express = require("express");
const PORT = process.env.PORT || 3000;
const db = require("./db/index");
const res = require("express/lib/response");
const app = express();

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("This is the root");
});
// route that shows all users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// app.get("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);
//     if (!user) throw Error("user not found");
//     res.json(user);
//   } catch (e) {
//     console.log(e);
//     res.send("user not found!");
//   }
// });

app.get("/users/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const user = await User.findByname(name);
    if (!user) throw Error("User not found");
    res.json(user);
  } catch (e) {
    console.log(e);
    res.send("User not found!");
  }
});
