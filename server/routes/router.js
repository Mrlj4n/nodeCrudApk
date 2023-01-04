const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

//get method rootRoute
route.get('/', services.homeRoutes);

//add method
route.get('/add-user', services.add_user)

//update method
route.get('/update-user', services.update_user)

//api
route.get('/api/users', controller.find);
route.post('/api/users', controller.create);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;