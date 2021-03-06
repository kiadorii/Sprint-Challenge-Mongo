const mongoose = require('mongoose');

const Budget = require('../models/budget');

const STATUS_USER_ERROR = 422;

const budgetCreate = (req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });

    newBudget
        .save()
        .then((createdBudget) => {
            res.json(createdBudget);
        })
        .catch((err) => {
            res.status(STATUS_USER_ERROR).json({ errorMessage: err });
            return;
        });
};

module.exports = {
    budgetCreate
}