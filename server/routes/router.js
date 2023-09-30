const express = require('express')
const router = express.Router()
const { createBlog } = require('../controllers/createBlog')
const { updateBlogs } = require('../controllers/updateBlog')
const { deleteBlogs } = require('../controllers/deleteBlog')
const { getBlogs } = require('../controllers/getBlogData')
const { loginData } = require('../controllers/loginData')
const { signupData } = require('../controllers/signup')
const { getsignData } = require('../controllers/getsignData')
const { createSchedule } = require('../BlogScheduleSchema/createSchedule')
const { getSchedule } = require('../BlogScheduleSchema/getSchedule')
const { updateSchedule } = require('../BlogScheduleSchema/updateSchedule')
const { deleteSchedule } = require('../BlogScheduleSchema/deleteSchedule')

router.get('/getBlogData', getBlogs)
router.post('/createBlog', createBlog)
router.put('/updateBlog/:id', updateBlogs)
router.delete('/deleteBlog/:id', deleteBlogs)

// ========== Signup & Login section =========

router.post('/signupData', signupData);
router.post('/loginData', loginData)
router.get('/getsignData', getsignData)

// =========== Vlog Schedule ============

router.get('/getSchedule', getSchedule);
router.post('/createSchedule', createSchedule);
router.put('/updateSchedule/:id', updateSchedule);
router.delete('/deleteSchedule/:id', deleteSchedule)

module.exports = router;