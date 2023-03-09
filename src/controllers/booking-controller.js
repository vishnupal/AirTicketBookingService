const { StatusCodes } = require('http-status-codes');
const { BookingService } = require('../services/index');
const bookingService = new BookingService();

const create = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);

    return res.status(StatusCodes.CREATED).json({
      data: response,
      success: true,
      message: 'Successfully completed Booking',
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(error.statusCode).json({
      message: error.message,
      success: false,
      err: error.explanation,
      data: {},
    });
  }
};
module.exports = {
  create,
};
