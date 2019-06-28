const express = require('express');
const multer = require('multer');
const routes = new express.Router();
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const upload = multer(uploadConfig);

function PostExist(req, res, next){
    console.log(req, res);
    return next();
}

routes.get('/posts', PostExist, PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;