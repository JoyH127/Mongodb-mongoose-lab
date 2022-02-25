//CRUD actions
const db = require("./db");
const User = require("./models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const findAll = async () => {
  const AllUser = await User.find({});
  console.log(AllUser);
};

const findUser = async () => {
  const twentyEight = await User.find({ age: 28 });
  console.log(twentyEight);
};

const createUser = async () => {
  const new_user = new User({
    name: "Joy",
    age: 21,
    status: "active",
  });
  await new_user.save();
  console.log("Created a user:", new_user);
};

const updateUser = async () => {
  const updated = await User.updateOne({ name: "Benny" }, { name: "Ben Choi" });
  console.log(updated);
};

const deleteUser = async () => {
  const deleted = await User.deleteOne({ name: "Lizzy" });
  console.log(deleted);
};

const FindTwentyFive = async () => {
  const find_twentyfive = await User.find({
    age: { $gt: 25, status: "active" },
  });
  console.log(find_twentyfive);
};

const lessTwentyFive = async () => {
  const less = await User.find({ age: { $lt: 25 }, status: "active" });

  // const less= await User.find( {$and:[{age: { $lt: 25 }}, {status: 'active'}]})
  console.log(less);
};

const run = async () => {
  //   await findAll();
  //   await findUser();
  //   await createUser();
  //   await updateUser();
  //   await deleteUser();
  //   await FindTwentyFive();
  await lessTwentyFive();
  db.close();
};

run();
