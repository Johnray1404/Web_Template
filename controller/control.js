// controller/control.js

exports.index = (req, res) => {
    res.render('index');
};

exports.about = (req, res) => {
    res.render('about');
};

exports.contact = (req, res) => {
    res.render('contact');
};

exports.product = (req, res) => {
    res.render('product');
};

exports.testimonial = (req, res) => {
    res.render('testimonial');
};
