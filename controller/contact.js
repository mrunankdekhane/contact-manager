//const asynchandler= require("express-async-handler"); // cover every async funtion with this async hndler it will do job of try and catch
const Contact = require("../models/contacts");
async function getContact(req, res) {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
}
async function createContact(req, res, next) {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.status(400)
        }
        const contact = await Contact.create({ name, email, phone });
        return res.status(201).json(contact);
    } catch (err) {
        next(err);
    }
}

async function getContactById(req, res) {
    
}
async function updateContact(req, res) {
    
}
async function deleteContact(req, res) {
    
}
module.exports = {
    getContact, 
    createContact,
    getContactById,
    updateContact, 
    deleteContact,
}
