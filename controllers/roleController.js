const { Role } = require('../models')

async function getRoles(req, res) {
    try {
        const roles = await Role.findAll()
        return res.json({message: 'Success', data: roles})
    } catch (error) {
        return error
    }
}

async function getRole(req, res) {
    try {
        const roleId = req.body.id
        const role = await Role.findByPk(roleId)
        if (!role) return res.json({message: 'User not found!', })
        return res.json({message: 'Success', data: role})
    } catch (error) {
        return error
    }
}

async function createRole(req, res) {
    const {name, description} = req.body
    try {
        const createdRole = Role.create({name, description})
        return res.json({message: 'Created role successfully', data: createdRole})
    } catch (error) {
        // handle validation for name
        return error
    }
}

async function updateRole(req, res) {
    const roleId = req.params.id
    const {name, description} = req.body
    try {
        const role = await Role.findByPk(roleId)
        if (!role) return res.json({message: 'Role not found!'})
        role.name = name
        role.description = description
        const updatedRole = await role.save()
        return res.json({message: 'Update role successfully', data: updatedRole})
    } catch (error) {
        // handle validation for name
        return error
    }
}

async function deleteRole(req, res) {
    try {
        const roleId = req.params.id
        const deletedUser = await Role.destroy({where: {id: roleId}},)
        return res.json({message: 'Delete role successfully', data: deletedUser})
    } catch (error) {
        return error
    }
}

module.exports = {
    getRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole,
}