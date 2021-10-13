// require('dotenv').config()
const Joy = require('joi')
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const Joi = require('joi');

app.use(express.json());

const url = process.env.DATABASE_URL || 'mongodb://localhost/pataServiceDB';
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));

// generate customers credentials 
const customers = [
    { id: 1, name: 'customer-1', email: 'cust@email.com' },
    { id: 2, name: 'customer-2', email: 'cust@email.com' },
    { id: 3, name: 'customer-3', email: 'cust@email.com' }
]

app.get('/', (req, res) => {
    res.send('customer routes')
})

app.get('/api/customers', (req, res) => {
    res.send(customers)
})

// Get customers ID 
app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id))
    if (!customer) res.status(404).send('Customer not found')
    res.send(customer)
})

// Add New customer 
app.post('/api/customers', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        res.status(404).send('Name is required and should have a minimum of 3 characers')
        return;
    }

    const customer = {
        id: customers.length + 1,
        name: req.body.name,
        // email: req.body.email
    };
    // add customers to Customers 
    customers.push(customer);
    res.send(customer)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port} ...`));