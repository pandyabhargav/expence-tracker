const Transaction = require('../models/scema');

exports.addTransaction = async (req, res) => {
        const { type, category, amount, description, date } = req.body;
        const newTransaction = new Transaction({
            type,
            category,
            amount,
            description,
            date
        });
        await newTransaction.save();
        console.log(newTransaction);
        res.redirect('/');
};

exports.viewTransactions = async (req, res) => {
        const transactions = await Transaction.find().sort({ date: -1 });
        res.render('index', { transactions });
};

exports.getEditTransaction = async (req, res) => {
        const { id } = req.params;
        const transaction = await Transaction.findById(id);
        res.render('add', { transaction });
};

exports.editTransaction = async (req, res) => {
        const { id } = req.params;
        const { type, category, amount, description, date } = req.body;
        await Transaction.findByIdAndUpdate(id, {
            type,
            category,
            amount,
            description,
            date
        });
        res.redirect('/');
};

exports.deleteTransaction = async (req, res) => {
        const { id } = req.params;
        await Transaction.findByIdAndDelete(id);
        res.redirect('/');
};
