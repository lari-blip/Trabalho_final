const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const upload = require('../middleware/uploadMiddleware');

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const newPost = new Post({
      title,
      content,
      user: userId,
      image: req.file ? req.file.path : null
    });

    const savedPost = await newPost.save();
    user.posts.push(savedPost._id);
    await user.save();

    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar o post.', details: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'name email');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar posts.', details: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('user', 'name email')
      .populate('comments.user', 'name email');

    if (!post) {
      return res.status(404).json({ error: 'Post não encontrado.' });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar post.', details: err.message });
  }
});

router.post('/:id/comments', async (req, res) => {
  try {
    const { userId, content } = req.body;

    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post não encontrado.' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    post.comments.push({ user: userId, content });
    await post.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao adicionar comentário.', details: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post não encontrado.' });
    }

    res.status(200).json({ message: 'Post deletado com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar post.', details: err.message });
  }
});

module.exports = router;
