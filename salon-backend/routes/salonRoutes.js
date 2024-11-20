const express = require('express');
const router = express.Router();
const Salon = require('../models/Salon');

router.post('/', async (req, res) => {
  try {
    const { name, owner, address, contact } = req.body;

    if (!name || !owner || !address || !contact) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const newSalon = new Salon({ name, owner, address, contact });
    const savedSalon = await newSalon.save();
    res.status(201).json(savedSalon);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar salão.', details: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const salons = await Salon.find().populate('services');
    res.status(200).json(salons);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar salões.', details: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const salon = await Salon.findById(req.params.id).populate('services');

    if (!salon) {
      return res.status(404).json({ error: 'Salão não encontrado.' });
    }

    res.status(200).json(salon);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar salão.', details: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, owner, address, contact } = req.body;

    const updatedSalon = await Salon.findByIdAndUpdate(
      req.params.id,
      { name, owner, address, contact },
      { new: true, runValidators: true }
    );

    if (!updatedSalon) {
      return res.status(404).json({ error: 'Salão não encontrado.' });
    }

    res.status(200).json(updatedSalon);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar salão.', details: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedSalon = await Salon.findByIdAndDelete(req.params.id);

    if (!deletedSalon) {
      return res.status(404).json({ error: 'Salão não encontrado.' });
    }

    res.status(200).json({ message: 'Salão deletado com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar salão.', details: err.message });
  }
});

module.exports = router;
