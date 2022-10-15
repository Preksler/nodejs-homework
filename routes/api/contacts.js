const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/contact');

const { ctrlWrapper } = require('../../helpers');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(ctrl.getAll));

router.get('/:contactId', authenticate, ctrlWrapper(ctrl.getById));

router.post('/', authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', authenticate, ctrlWrapper(ctrl.deleteContact));

router.put(
  '/:contactId',
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  validateBody(schemas.updateFavSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
