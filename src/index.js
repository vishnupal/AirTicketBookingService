const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { PORT } = require('./config/setupConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');
const setupAndStartSever = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/bookingservice/api', apiRoutes);
  // app.get('/api/v1/home', (req, res) => {
  //   return res.status(200).json({
  //     message: 'Hitting the booking service',
  //   });
  // });
  app.listen(PORT, () => {
    console.log('Server started on port', PORT);

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};
setupAndStartSever();
