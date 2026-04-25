const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMeUser,
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');

// 🔐 Auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMeUser);

// =========================
// 📊 DASHBOARD DATA ROUTES
// =========================

// EVENTS
router.get('/events', protect, async (req, res) => {
  const user = await req.user.constructor.findById(req.user._id);
  res.json(user.events);
});

router.post('/events', protect, async (req, res) => {
  const { title, date, category } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ message: 'Title is required' });
  }
  if (!date) {
    return res.status(400).json({ message: 'Date is required' });
  }
  if (!category) {
    return res.status(400).json({ message: 'Category is required' });
  }
  const user = await req.user.constructor.findById(req.user._id);
  user.events.push(req.body);
  await user.save();
  res.json(user.events);
});

router.put('/events/:id', protect, async (req, res) => {
  const user = await req.user.constructor.findById(req.user._id);

  const event = user.events.id(req.params.id);
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }

  event.title = req.body.title ?? event.title;
  event.desc = req.body.desc ?? event.desc;
  event.date = req.body.date ?? event.date;
  event.time = req.body.time ?? event.time;
  event.category = req.body.category ?? event.category;
  event.notified = req.body.notified ?? event.notified;

  await user.save();
  res.json(user.events);
});

router.delete('/events/:id', protect, async (req, res) => {
  const user = await req.user.constructor.findById(req.user._id);

  const event = user.events.id(req.params.id);
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }

  user.events.pull({ _id: req.params.id });

  await user.save();
  res.json(user.events);
});

// TASKS
router.get('/tasks', protect, async (req, res) => {
  const user = await req.user.constructor.findById(req.user._id);
  res.json(user.tasks);
});

router.post('/tasks', protect, async (req, res) => {
  const user = await req.user.constructor.findById(req.user._id);

  user.tasks.push(req.body);
  await user.save();

  res.json(user.tasks);
});

router.put('/tasks/:id', protect, async (req, res) => {
  const user = await req.user.constructor.findById(req.user._id);

  const task = user.tasks.id(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.text = req.body.text ?? task.text;
  task.done = req.body.done ?? task.done;
  task.date = req.body.date ?? task.date;

  await user.save();
  res.json(user.tasks);
});

router.delete('/tasks/:id', protect, async (req, res) => {
  const user = await req.user.constructor.findById(req.user._id);

  user.tasks = user.tasks.filter(
    (task) => task._id.toString() !== req.params.id
  );

  await user.save();
  res.json(user.tasks);
});

// MOOD
router.get('/mood', protect, async (req, res) => {
  res.json(req.user.moodLog);
});

router.post('/mood', protect, async (req, res) => {
  const user = req.user;
  user.moodLog.push(req.body);
  await user.save();
  res.json(user.moodLog);
});

// SETTINGS
router.get('/settings', protect, async (req, res) => {
  res.json(req.user.settings);
});

router.put('/settings', protect, async (req, res) => {
  const user = req.user;
  user.settings = { ...user.settings, ...req.body };
  await user.save();
  res.json(user.settings);
});

// PROFILE (sticky note, pic, name)
router.put('/profile', protect, async (req, res) => {
  const user = req.user;

  user.stickyNote = req.body.stickyNote ?? user.stickyNote;
  user.profilePic = req.body.profilePic ?? user.profilePic;
  user.sidebarName = req.body.sidebarName ?? user.sidebarName;

  await user.save();

  res.json({
    stickyNote: user.stickyNote,
    profilePic: user.profilePic,
    sidebarName: user.sidebarName,
  });
});

module.exports = router;