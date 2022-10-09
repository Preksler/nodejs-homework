const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody } = require('../../middlewares');

const { schemas } = require('../../models/contact');

const { ctrlWrapper } = require('../../helpers');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact));

router.put('/:contactId', validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById));

router.patch(
  '/:contactId/favorite',
  validateBody(schemas.updateFavSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
