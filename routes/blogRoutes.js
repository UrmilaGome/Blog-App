const express = require('express');
const router = express.Router();
const {getAllBlogs, createBlog, getBlog, removeBlog, updateBlog} = require("../controllers/blogControllers");

router.get('/',getAllBlogs);
router.post('/',createBlog);
router.get('/:id',getBlog);
router.delete('/:id',removeBlog);
router.put('/:id',updateBlog);

module.exports = router;