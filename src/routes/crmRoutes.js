import { addNewContact, getContacts } from "../controllers/crmController"

const routes = (app) => {
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact)
    app.route('/contact/:contactId')
        .put((req, res) => {
            res.send("PUT request successfully!")
        })
        .delete((req, res) => {
            res.send("DELETE request successfully!")
        })

}

export default routes