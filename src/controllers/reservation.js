"use strict";

const Reservation = require("../models/reservation");

module.exports = {
  list: async (req, res) => {
    /* 
        #swagger.tags = ['Reservations']
        #swagger.summary = 'List Reservations'
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
    const result = await res.getModelList(Reservation);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Reservation),
      result,
    });
  },

  create: async (req, res) => {
    /* 
        #swagger.tags = ['Reservations']
        #swagger.summary = 'Create Reservation'
    */
    const result = await Reservation.create(req.body);
    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    /* 
        #swagger.tags = ['Reservations']
        #swagger.summary = 'Create Reservation'
    */
    const result = await Reservation.findById(req.params.id);
    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    /* 
        #swagger.tags = ['Reservations']
        #swagger.summary = 'Create Reservation'
    */
    const result = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(202).send({
      error: false,
      result,
    });
  },

  deleteReservation: async (req, res) => {
    /* 
        #swagger.tags = ['Reservations']
        #swagger.summary = 'Create Reservation'
    */
    const result = await Reservation.findByIdAndDelete(req.params.id);
    if (result) return res.status(204).end();
    res.status(404).send({
      error: true,
      message: "Reservation not found or already deleted",
    });
  },
};
