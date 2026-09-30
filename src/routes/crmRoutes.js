import {
addNewContact,
getContacts,
getContactWithId,
deleteContactWithId,
updateContact
} from "../controllers/crmController"

const routes = (app) => {
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact)
    app.route('/contact/:contactId')
        .get(getContactWithId)
        .put(updateContact)
        .delete(deleteContactWithId)

}

export default routes