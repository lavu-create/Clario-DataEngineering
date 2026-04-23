const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const { generateToken } = require('../utils/generateToken');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    res.status(400);
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    stickyNote: '',
    profilePic: '',
    sidebarName: name,
    events: [],
    tasks: [],
    moodLog: [],
    settings: {
      timeFormat: '24',
      reminderValue: 4,
      reminderUnit: 'min',
      reminderSound: 'default',
      locationCountry: '',
      locationState: '',
      locationCity: '',
      selectedTheme: 'sunburst-theme',
      selectedSection: 'calendar',
      selectedCategory: 'all',
    },
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      dashboard: {
        stickyNote: user.stickyNote,
        profilePic: user.profilePic,
        sidebarName: user.sidebarName,
        events: user.events,
        tasks: user.tasks,
        moodLog: user.moodLog,
        settings: user.settings,
      },
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please enter correct credentials');
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
    dashboard: {
      stickyNote: user.stickyNote,
      profilePic: user.profilePic,
      sidebarName: user.sidebarName,
      events: user.events,
      tasks: user.tasks,
      moodLog: user.moodLog,
      settings: user.settings,
    },
  });
});

// @desc    Get current user with full dashboard data
// @route   GET /api/users/me
// @access  Private
const getMeUser = asyncHandler(async (req, res) => {
  const currUser = await User.findById(req.user._id).select('-password');

  if (!currUser) {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json({
    _id: currUser._id,
    name: currUser.name,
    email: currUser.email,
    stickyNote: currUser.stickyNote,
    profilePic: currUser.profilePic,
    sidebarName: currUser.sidebarName,
    events: currUser.events,
    tasks: currUser.tasks,
    moodLog: currUser.moodLog,
    settings: currUser.settings,
    createdAt: currUser.createdAt,
    updatedAt: currUser.updatedAt,
  });
});

module.exports = { registerUser, loginUser, getMeUser };