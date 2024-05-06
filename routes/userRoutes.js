const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/auth.js')
const {
    getUsers,
    getUserProfile,
    updateUser,
    deleteUser,
    registerUser,
    loginUser,
} = require('../controllers/userController.js')

router.route('/').get(protect, getUsers).post(protect, registerUser)
router.post('/login', loginUser)
router.get('/profile', protect, getUserProfile)
router.route('/:id').put(protect, updateUser).delete(protect, deleteUser)

module.exports = router