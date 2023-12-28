const db = require("../models/index");
const Category = db.Category;

exports.addCategory = async (req, res) => {
  const { category_id, service_name, type, price_options } = req.body;
  const logintoken = req.headers.logintoken;

  if (logintoken) {
    try {
      const categoryCreated = await Category.create({
        category_id,
        service_name,
        type,
        price_options,
      });
      res.status(201).json(categoryCreated);
    } catch (err) {
      console.log(err);
    }
  } else {
    res.json("login token require");
  }
};

exports.getAllCategories = async (req, res) => {
  const logintoken = req.headers.logintoken;
  if (logintoken) {
    try {
      const getAllCategory = await Category.findAll();
      res.status(200).json(getAllCategory);
    } catch (err) {
      console.log("failed to fetach category", err);
    }
  } else {
    res.json("login token require");
  }
};

exports.UpdateCategoryById = async (req, res) => {
  const { category_id, service_name, type, price_options } = req.body;
  const logintoken = req.headers.logintoken;

  if (logintoken) {
    const ct_id = req.params.id;
    const updateCategory = await Category.update(
      {
        category_id,
        service_name,
        type,
        price_options,
      },
      { where: { id: ct_id } }
    );

    const upCate = await Category.findOne({ where: { id: ct_id } });
    res.status(201).json(upCate);
  } else {
    res.json("login token require");
  }
};

exports.deleteCategoryById = async( req,res) => {
  const logintoken = req.headers.logintoken;

  if (logintoken) {
    const ct_id = req.params.id;
    const deleteCategory = await Category.destroy(
      { where: { id: ct_id } }
    );
    res.status(200).json('category deleted Successfully ');
  } else {
    res.json("login token require");
  }
}
