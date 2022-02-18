import db from "../config/db.js";

export const getUsers = (req, res) => {
  db.loadDatabase({}, function () {
    res.send({
      data: db.getCollection("users").data,
    });
  });
};

export const postUsers = (req, res) => {
  const data = req.body;
  let users = db.addCollection("users");

  const savedData = users.insert(data);
  db.saveDatabase();

  res.status(200).send({
    status: true,
    data: savedData,
    message: "Data saved successfully !!",
  });
};

export const getUsersById = (req, res) => {
  let id = JSON.parse(req.params.id);

  db.loadDatabase({}, () => {
    let users = db.getCollection("users");
    let user = users.findOne({ id: id });
    if (user) {
      return res.status(200).send({
        status: true,
        data: user,
        message: "User found succesfully !!",
      });
    }
    res.status(400).send({
      status: false,
      message: "User not found !!",
    });
  });
};
