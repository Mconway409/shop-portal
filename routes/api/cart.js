const router = require('express').Router();
const cartController = require('../../controllers/cartController.js');

// url "/api/cart"
router.route('/').get(cartController.findAll).post(cartController.create);

router
  .route('/:id')
  .get(cartController.findById)
  .put(cartController.update) // used in the cart page
  .delete(cartController.remove);

// Matches with user id and status
router
  .route('/:user/:status')
  .get(cartController.findByUserandStatus)
  .put(cartController.update)
  .delete(cartController.remove);

//  *****UNUSED*****
// Matches with cart id and product id
// router
//   .route('/id/:id/:product')
//   .get(cartController.findByIdandProduct)
//   .put(cartController.updateAProduct)
//   .delete(cartController.removeAProduct);

// Matches with product id only
// router
//   .route('/product/:product')
//   .get(cartController.findByProduct)
//   .put(cartController.update)
//   .delete(cartController.remove);

// Matches with "/status/:status"
// router
//   .route('/status/:status')
//   .get(cartController.findByStatus)
//   .put(cartController.update)
//   .delete(cartController.remove);
//  *****END OF UNUSED*****
module.exports = router;
