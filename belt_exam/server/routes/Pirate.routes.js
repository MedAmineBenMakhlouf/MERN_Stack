const pirateController = require('../controllers/pirate.controller');



module.exports = app => {
  app.get('/api/pirates', pirateController.getAll);
  app.post('/api/pirates', pirateController.create);
  app.get('/api/pirates/:id', pirateController.getOne);
  app.put('/api/pirates/:id', pirateController.updatePirate);
  app.delete('/api/pirates/:id', pirateController.delete);

};