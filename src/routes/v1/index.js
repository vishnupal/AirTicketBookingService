const express = require('express');
const router = express.Router();
const { BookingController } = require('../../controllers');

const bookingController = new BookingController();

router.get('/info', (req, res) => {
  return res.json({ message: 'Ok' });
});
router.post('/bookings', bookingController.create);
router.post('/publish', bookingController.sendMessageToQueue);
module.exports = router;
