const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema({
  panCard: String,
  incomeFromSalary: Number,
  incomeFromShareMarket: Number,
  state: String,
  sgst: Number,
  cgst: Number,
  totalTax: Number,
  status: { type: String, enum: ['NEW', 'PAID', 'DELAYED'], default: 'NEW' },
}, { timestamps: true });

module.exports = mongoose.model('Tax', taxSchema);
