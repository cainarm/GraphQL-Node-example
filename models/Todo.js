import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const todoSchema = new Schema({
	uid: {
		type: String,
	},
	description: {
	 	type: String,
		required: true
	},
  	imageUrl: {
	 	type: String,
		required: true
	},
	name: {
	 	type: String,
		required: true
	}
}, { collection: 'todo', timestamps: true } );

export default mongoose.model('todo', todoSchema);
