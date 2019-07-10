const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const Post = require('../models/PortfolioItem');

module.exports = {
    async index (req, res) {
        const post = await Post.find().sort('-createdAt');

        return res.json(post);
    },

    async store (req, res) {
        //Get Info
        const { name, description, tools } = req.body;
        const { filename: image } = req.file;

        //Set image file name
        const [ fname, ext ] = image.split('.');
        const fileName = `${fname}.jpg`;

        //Resize and save new image
        await sharp(req.file.path).resize(500).jpeg({ quality: 100}).toFile(
            path.resolve( req.file.destination, 'resized', fileName )
        );

        //Delete old image
        fs.unlinkSync(req.file.path);

        //Create post
        const post = await Post.create({
            name,
            description,
            tools,
            image: fileName,
        });

        return res.json(post);
    },

    async show (req, res) {
        const post = await Post.findById(req.params.id);

        return res.json(post);
    },

    async destroy (req, res) {
        await Post.findByIdAndRemove(req.params.id);

        return res.send();
    }
};