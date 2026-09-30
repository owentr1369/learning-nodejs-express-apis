import { addNewContact } from "../controllers/crmController"

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request from : ${req.originalUrl}`)
            console.log(`Request type : ${req.method}`)
            next()
            res.send("GET request successfully!")
        }, (req, res) => {
            res.send("GET request successfully!")
        })
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