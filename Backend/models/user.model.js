import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Notes = mongoose.model('Notes', noteSchema);

export default Notes;
