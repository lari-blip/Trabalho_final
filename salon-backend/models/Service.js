const mongoose = require('mongoose')
const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Salon' }],
})
module.exports = mongoose.model('Service', serviceSchema)