const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const salonRoutes = require('./routes/salonRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();
const app = express();

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads/'));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB conectado'))
    .catch((err) => console.error('Erro ao conectar MongoDB', err))

app.use('/api/users', userRoutes);
app.use('/api/salons', salonRoutes)
app.use('/api/bookings', bookingRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));