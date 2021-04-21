const router = require('express').Router();
const isReviewedController = require('../../controllers/isReviewedController.js');

// Matches with "/api/isReviewable"

router.route('/').get(isReviewedController.findAll).post(isReviewedController.create);

// Matches with "/api/isReveiewable/:id"
router
  .route('/:id')
  .get(isReviewedController.findById)
  .put(isReviewedController.update)
  .delete(isReviewedController.remove);

// Matches with "/api/isReviewable/:isReviewable"
router
  .route('/isReviewable/:isReviewable')
  .get(isReviewedController.findByTotalStars)
  .put(isReviewedController.update)
  .delete(isReviewedController.remove);

// Matches with "/api/name/:name"
// router
//   .route('/name/:name')
//   .get(isReviewedController.findByName)
//   .put(isReviewedController.update)
//   .delete(isReviewedController.remove);

module.exports = router;
