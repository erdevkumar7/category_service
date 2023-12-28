const db = require("../models/index");
const Service = db.Service;
exports.postService = async(req,res) =>{
    const logintoken = req.headers.logintoken;

  if (logintoken) {
      const {service_id, duration, price, type} = req.body
      const serviceCreated = await Service.create({
          service_id,
          duration,
          price,
          type
      })
      res.status(201).json(serviceCreated)
  }else {
    res.json("login token require");
  }
}

exports.getAllServices = async(req, res) =>{
    const logintoken = req.headers.logintoken;

    if (logintoken) {
        const getAllServce = await Service.findAll()
        res.status(201).json(getAllServce)
    }else {
      res.json("login token require");
    }
}

exports.updateServiceById = async (req,res) =>{
    const {service_id, duration, price, type} = req.body
    const logintoken = req.headers.logintoken;
  
    if (logintoken) {
      const s_id = req.params.id;
      const updateCategory = await Service.update(
        {
            service_id,
            duration,
            price,
            type
        },
        { where: { id: s_id } }
      );
  
      const upService = await Service.findOne({ where: { id: s_id } });
      res.status(201).json(upService);
    } else {
      res.json("login token require");
    }
}

exports.deleteServiceyById = async( req,res) => {
    const logintoken = req.headers.logintoken;
  
    if (logintoken) {
      const s_id = req.params.id;
      const deleteService = await Service.destroy(
        { where: { id: s_id } }
      );
      res.status(200).json('Service deleted Successfully ');
    } else {
      res.json("login token require");
    }
  }