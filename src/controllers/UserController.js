const mongoose = require("mongoose");

const Users = mongoose.model("users");

module.exports = {
  // Show all data in users
  async index(req, res) {
    const data = await Users.find();
    return res.json(data);
  },
  // Show a particular user by id
  async show(req, res) {
    const data = await Users.findById(req.params.id);
    return res.json(data);
  },
  // Store user data
  async store(req, res) {
    const data = await Users.create(req.body)
      .then(result => {
        return res.json({
          success: true,
          message: result,
        });
      })
      .catch(err => {
        return res.json({
          success: false,
          message: err,
        });
      });
  },
  // Update a user's data
  async update(req, res) {
    const data = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .then(result => {
        return res.json({
          success: true,
          message: result,
        });
      })
      .catch(err => {
        return res.json({
          success: false,
          message: err,
        });
      });
  },
  // Delete a user
  async destroy(req, res) {
    await Users.findByIdAndDelete(req.params.id)
      .then(result => {
        return res.json({
          success: true,
          message: result,
        });
      })
      .catch(err => {
        return res.json({
          success: false,
          message: err,
        });
      });
  },
};
