import mongoose from 'mongoose'
import { ContactSchema } from '../models/crmModel'

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body)

        const contact = await newContact.save()

        res.json(contact)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({})
        res.json(contacts)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

export const getContactWithId = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId)
        res.json(contact)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

