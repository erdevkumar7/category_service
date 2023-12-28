const express = require('express');
const router = express.Router();
const {getAllCategories, addCategory,UpdateCategoryById, deleteCategoryById} = require('../controllers/category.controller');

router.post("/category",addCategory);
router.get("/categories",getAllCategories);
router.put("/category/:id", UpdateCategoryById);
router.delete("/category/:id", deleteCategoryById);

module.exports = router;