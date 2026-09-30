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