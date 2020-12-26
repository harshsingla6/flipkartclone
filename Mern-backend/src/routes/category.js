const express = require("express");
// const Category = require('../models/category')
const slugify = require('slugify')
const { addCategory , getCategories } = require('../controller/category');
const { adminMiddleware } = require("../common-middleware");
const router = express.Router();

router.post('/category/create', adminMiddleware, addCategory)
router.get('/category/getcategory', getCategories)

module.exports = router;