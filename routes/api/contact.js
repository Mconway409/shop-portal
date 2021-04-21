const router = require('express').Router();
const contactController = require('../../controllers/contactController.js');

// Matches with "/api/contact"
router.route('/').get(contactController.findAll).post(contactController.create);

// Matches with "/api/contact/:id"
router
  .route('/:id')
  .get(contactController.findById)
  .put(contactController.update)
  .delete(contactController.remove);

// Matches with "/name:name"
router
  .route('/name/:name')
  .get(contactController.findByName)
  .put(contactController.update)
  .delete(contactController.remove);

// Matches with "/name:name"
router
  .route('/email/:email')
  .get(contactController.findByEmail)
  .put(contactController.update)
  .delete(contactController.remove);

module.exports = router;
