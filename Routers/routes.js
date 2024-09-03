const express = require('express');
const router = express.Router();
const transactionController = require('../controller/controller');

// Route to add a new transaction
router.post('/add', transactionController.addTransaction);

// Route to view all transactions
router.get('/', transactionController.viewTransactions);

// Route to get the edit form
router.get('/edit/:id', transactionController.getEditTransaction);

// Route to edit an existing transaction
router.post('/edit/:id', transactionController.editTransaction);

// Route to delete a transaction
router.get('/delete/:id', transactionController.deleteTransaction);

module.exports = router;
