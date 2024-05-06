const {Item, User} = require('../models')

async function getItems(req, res) {
    try {
        const items = await Item.findAll();
        // include: [{
            //     model: User,
            //     as: 'user'
            // }],
        return res.json({msg: 'Success', data: items})
    } catch (error) {
        console.log('error: ', error)
        return error
    }
}

async function getItem(req, res) {
    try {
        return res.status(200).json({message: 'single Item'})
    } catch (error) {
        return error
    }
}

async function createItem(req, res) {
    try {
        return res.status(201).json({message: 'create Item'})
    } catch (error) {
        return error
    }
}

async function updateItem(req, res) {
    try {
        return res.status(200).json({message: 'update Item'})
    } catch (error) {
        return error
    }
}

async function deleteItem(req, res) {
    try {
        return res.status(200).json({message: 'delete Item'})
    } catch (error) {
        return error
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
}