import mongoose from 'mongoose';
import config from './config';

export defualt callback => {
	let db = mongoose.connect(config.mongoUrl);
	callback(db);
}