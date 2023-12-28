const express = require('express');
const router =  express.Router();
const {postService, getAllServices, updateServiceById, deleteServiceyById} = require('../controllers/service.contoller')

router.post('/category/:id/service', postService);
router.get('/category/:id/services', getAllServices);
router.put('/category/:id/service/:id', updateServiceById)
router.delete('/category/:id/service/:id', deleteServiceyById)


module.exports = router;