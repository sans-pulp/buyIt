import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
}, { timestamps: true });
export default mongoose.model('User', userSchema);
