"use strict";

const User = require("../models/user");

module.exports = {
  list: async (req, res) => {
    /* 
        #swagger.tags = ['Users']
        #swagger.summary = 'List Users'
        #swagger.desription = `
            You can send query with endpoint for filter[], search[], sort[], page and limit.
            <ul> Examples usage:
                <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                <li>URL/?<b>page=2&limit=1</b></li>
            </ul>
        `
    */
    const result = await res.getModelList(user);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(User),
      result,
    });
  },
  create: async (req, res) => {
    /* 
        #swagger.tags = ['Users']
        #swagger.summary = 'Create User'
    */
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        req.body.password
      )
    ) {
      res.errorStatusCode = 401;
      throw new Error(
        "Password must be at least 8 characters long, and include at least one lowercase letter, one uppercase letter, one digit, and one special character (e.g., @$!%*?&)"
      );
    }
    const result = await User.create(req.body);
    res.status(200).send({
      error: false,
      result,
    });
  },
  read: async (req, res) => {
    /* 
        #swagger.tags = ['Users']
        #swagger.summary = 'Read User'
    */
    const result = await User.findById(req.params.id);
    res.status(200).send({ error: false, result });
  },
  update: async (req, res) => {
    /* 
        #swagger.tags = ['Users']
        #swagger.summary = 'Update User'
    */
    const result = await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(202).send({
      error: false,
      result,
    });
  },
  deleteUser: async (req, res) => {
    /* 
        #swagger.tags = ['Users']
        #swagger.summary = 'Delete User'
    */
    const result = await User.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(204).end();
    }
    return res.status(404).send({
      error: true,
      message: "User not found or already deleted",
    });
  },
};
