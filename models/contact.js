const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleSaveErrors } = require('../helpers');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      required: [true, 'User email required'],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, 'User phone number required'],
      unique: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateFavSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateFavSchema,
};

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
  schemas,
};
