const express = require('express')
const router = express.Router()

const {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem,
} = require('../controllers/itemController.js')

router.route('/').get(getItems).post(createItem)
router.route('/:id').get(getItem).put(updateItem).delete(deleteItem)

module.exports = router