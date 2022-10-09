const express = require('express')
const Joi = require("joi");

const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const router = express.Router()

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})

router.get('/', async (req, res, next) => {
  try {
    const results = await contacts.listContacts();
    res.json(results);
  } catch (error) {
    next(error);
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const results = await contacts.getContactById(contactId);
    if (!results) {
      throw RequestError(404, "Not found");
    }
    res.json(results);
  } catch (error) {
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw RequestError(400, "missing required name field");
    }
    const results = await contacts.addContact(req.body);
    res.status(201).json(results);
  } catch (error) {
    next(error);
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const results = await contacts.removeContact(contactId);
    if (!results) {
      throw RequestError(404, "Not found");
    }
    res.json({
      "message": "contact deleted"
    });
  } catch (error) {
    next(error);
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw RequestError(400, "missing fields");
    }
    const { contactId } = req.params;
    const results = await contacts.updateContact(contactId, req.body);
    if (!results) {
      throw RequestError(404, "Not found");
    }
    res.status(201).json(results);
  } catch (error) {
    next(error);
  }
})

module.exports = router
