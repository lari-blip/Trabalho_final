const mongoose = require('mongoose')
const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    salon: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon', required: true},
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true},
    date: { type: Date, required: true },
    status: { type: String, enum: ['Pendente', 'Confirmado', 'Cancelado'], default: 'Pedente' },
})
module.exports = mongoose.model('Booking', bookingSchema)