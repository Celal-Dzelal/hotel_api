"use strict";

const Room = require("../models/room");

module.exports = {
  list: async (req, res) => {
    /* 
        #swagger.tags = ['Rooms']
        #swagger.summary = 'List Rooms'
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
    const result = await res.getModelList(Room);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Room),
      result,
    });
  },
  create: async (req, res) => {
    /* 
        #swagger.tags = ['Rooms']
        #swagger.summary = 'Create Room'
    */
    const result = await Room.create(req.body);
    res.status(200).send({
      error: false,
      result,
    });
  },
  read: async (req, res) => {
    /* 
        #swagger.tags = ['Rooms']
        #swagger.summary = 'Read Room'
    */
    const result = await Room.findById(req.params.id);
    res.status(200).send({ error: false, result });
  },
  update: async (req, res) => {
    /* 
        #swagger.tags = ['Rooms']
        #swagger.summary = 'Update Room'
    */
    const result = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(202).send({
      error: false,
      result,
    });
  },
  deleteRoom: async (req, res) => {
    /* 
        #swagger.tags = ['Rooms']
        #swagger.summary = 'Delete Room'
    */
    const result = await Room.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(204);
    }
    return res.status(404).send({
      error: true,
      message: "Room not found or already deleted",
    });
  },
};
