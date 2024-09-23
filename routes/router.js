// routes/router.js

const express = require('express');
const router = express.Router();
const controller = require('../controller/control');

// Route for the home page
router.get('/', controller.index);

// Route for the About page
router.get('/about', controller.about);

// Route for the Contact page
router.get('/contact', controller.contact);

// Route for the Products page
router.get('/product', controller.product);

// Route for the Testimonials page
router.get('/testimonial', controller.testimonial);

router.get('/index', controller.index);

module.exports = router;
