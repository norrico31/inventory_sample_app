const {Item, User} = require('../models')

async function getItems(req, res) {
    try {
        const items = await Item.findAll();
        return res.json({msg: 'Success', data: items})
    } catch (error) {
        console.log('error get items: ', error)
        return error
    }
}

async function getItem(req, res) {
    const itemId = req.params.id
    try {
        const item = await Item.findByPk(itemId)
        if (!item) return res.json({message: 'Item not found!'})
        return res.json({message: 'Success', data: item})
    } catch (error) {
        console.log('error get item')
        return error
    }
}

async function createItem(req, res) {
    const {
        sku,
        qty,
        minStockLvl,
        category,
        title,
        slug,
        short_description,
        description,
        cost,
        price,
        discounted_price,
        tag,
        status,
        batch_no,
    } = req.body;
    try {
        // PLEASE HANDLE VALIDATION IN FRONTEND
        const createdItem = await Item.create({
            sku,
            qty,
            minStockLvl,
            category,
            title,
            slug,
            short_description,
            description,
            cost,
            price,
            discounted_price,
            tag,
            status,
            batch_no,
        })
        return res.json({message: 'Item successfully created', data: createdItem})
    } catch (error) {
        console.log('error create item: ', error)
        return error
    }
}

async function updateItem(req, res) {
    const itemId = req.params.id
    const {
        sku,
        qty,
        minStockLvl,
        category,
        title,
        slug,
        short_description,
        description,
        cost,
        price,
        discounted_price,
        tag,
        status,
        batch_no,
    } = req.body;
    try {
        const item = await Item.findByPk(itemId)
        if (!item) return res.json({message: 'Item not found!'})
        item.sku = !sku ? item.sku : sku;
        item.qty = !qty ? item.qty : qty; 
        item.minStockLvl = !minStockLvl ? item.minStockLvl : minStockLvl;
        item.category = !category ? item.category : category;
        item.title = title ? title : item.title
        item.slug = slug ? slug : item.slug
        item.short_description = short_description ? short_description : item.short_description
        item.description = description ? description : item.description;
        item.cost = cost ? cost : item.cost;
        item.price = price ? price : item.price
        item.discounted_price = discounted_price ? discounted_price : item.discounted_price;
        item.tag = tag ? tag : item.tag
        item.status = status ? status : item.status
        item.batch_no = batch_no ? batch_no : item.batch_no;
        const updatedItem = await item.save()
        return res.json({message: 'Update item successfully', data: updatedItem})
    } catch (error) {
        console.log('error update item: ', error)
        return error
    }
}

async function deleteItem(req, res) {
    const itemId = req.params.id
    try {
        const deletedItem = await Item.destroy({where: {id: itemId}})
        return res.json({message: 'Delete item successfully', data: deletedItem})
    } catch (error) {
        console.log('error delete item: ', error)
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