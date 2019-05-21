import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Employee = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    location: {type: String},
    company: {type: String},
    profile: {type: String},
});

export default mongoose.model('Employee', Employee );