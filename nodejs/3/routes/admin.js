const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/add-course', (req,res) => {
    res.sendFile(path.join(__dirname,"..","views","add-course.html"));
});

router.post('/add-course', (req,res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
