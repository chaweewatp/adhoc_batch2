const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

console.log("mongo connected")
const Cat = mongoose.model('Cat', { name: String ,age: Number});

const kitty = new Cat({ name: 'Peter', age: 7 });
kitty.save().then(() => console.log('meow'));
