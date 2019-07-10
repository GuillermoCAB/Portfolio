const express = require("express");
const multer = require("multer");

const PortfolioController = require("./controller/PortfolioController");
const uploadConfigs = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfigs);

routes.get('/post', PortfolioController.index);
routes.get('/post/:id', PortfolioController.show);
routes.delete('/post/:id', PortfolioController.destroy);
routes.post('/post', upload.single('image'), PortfolioController.store);

module.exports = routes;