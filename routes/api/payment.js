const router = require('express').Router();
const paymentController = require('../../controllers/paymentController');

// Matches with "/api/payment"
router.route('/').post(paymentController.purchase);

module.exports = router;
