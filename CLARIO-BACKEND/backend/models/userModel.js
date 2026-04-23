const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, default: '' },
    date: { type: String, required: true },
    time: { type: String, default: '' },
    category: { type: String, default: '💼 Work' },
    notified: { type: Boolean, default: false },
  },
  { _id: true }
);

const taskSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    done: { type: Boolean, default: false },
    date: { type: String, required: true },
  },
  { _id: true }
);

const moodSchema = new mongoose.Schema(
  {
    mood: { type: String, required: true },
    date: { type: String, required: true },
  },
  { _id: true }
);

const settingsSchema = new mongoose.Schema(
  {
    timeFormat: { type: String, default: '24' },
    reminderValue: { type: Number, default: 4 },
    reminderUnit: { type: String, default: 'min' },
    reminderSound: { type: String, default: 'default' },
    locationCountry: { type: String, default: '' },
    locationState: { type: String, default: '' },
    locationCity: { type: String, default: '' },
    selectedTheme: { type: String, default: 'sunburst-theme' },
    selectedSection: { type: String, default: 'calendar' },
    selectedCategory: { type: String, default: 'all' },
  },
  { _id: false }
);

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },

    stickyNote: {
      type: String,
      default: '',
    },
    profilePic: {
      type: String,
      default: '',
    },
    sidebarName: {
      type: String,
      default: '',
    },

    events: [eventSchema],
    tasks: [taskSchema],
    moodLog: [moodSchema],

    settings: {
      type: settingsSchema,
      default: () => ({}),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);