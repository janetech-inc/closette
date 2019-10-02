const express = require('express');
const routes = express.Router();
const {
  getAllCollections,
  getCollectionById,
  getCollectionProducts,
  getCollectionLooks
} = require('../../app/services/controllers/collection-service');

// api routes, move those into a seperate file at some point
routes.get('/api/home', getAllCollections);

routes.get('/api/collections', getAllCollections);

routes.get('/api/collections/:id', getCollectionById);

routes.get('/api/collections/:id/products', getCollectionProducts);

// routes.get('/api/collections/:id/products/:prodId', getCollectionProductDetail);

routes.get('/api/collections/:id/looks', getCollectionLooks);

module.exports = routes;