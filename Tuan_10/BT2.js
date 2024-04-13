const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/habitTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const habitSchema = new mongoose.Schema({
    label: String,
    timeInterval: Number,
    lastNotification: Date,
    isDone: Boolean
});

const Habit = mongoose.model('Habit', habitSchema);

// Example data seeding
async function seedData() {
    await Habit.deleteMany();

    await Habit.insertMany([
        { label: 'Drink water', timeInterval: 60, lastNotification: null, isDone: false },
        { label: 'Take a walk', timeInterval: 120, lastNotification: null, isDone: false },
        { label: 'Read a book', timeInterval: 180, lastNotification: null, isDone: false }
    ]);
}

seedData();
