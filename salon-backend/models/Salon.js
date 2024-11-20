const mongoose = require('mongoose')
const salonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    addres: { type: String, required: true },
    contact: { type: String, required: true },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
})
module.exports = mongoose.model('Salon', salonSchema)