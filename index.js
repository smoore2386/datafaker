const mongoose = require('mongoose');
const faker = require('faker');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/myappdatabase');
// Define what our schema is 
const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: String,
    meta: {
	age: Number,
	website: String
    },
    created_at: Date,
    updated_at: Date
});

const  User = mongoose.model('User', userSchema);

let user  = createUser();
console.log(user);


user.save( err => {
    if(err) {
	console.log("There was an error");
    }
    console.log("saved successfully");
});
process.exit();
// Lets start by creating fake users
function createUsers(n){
    return ;
}

function createUser(){
    return new User({
	name: faker.name.findName(),
	username: faker.internet.userName(),
	password: faker.internet.password(),
	email: faker.internet.email(),
	location: faker.address.state,
	created_at: faker.date.past(),
	updated_at: faker.date.recent()
    });
}

