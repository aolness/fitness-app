import mongoose from 'mongoose';

mongoose.connect(
    "mongodb://localhost:27012/fitness_app_db",
    { useNewUrlParser: true}
);

const db = mongoose.connections;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const exerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    muscleGroup: {type: String, required:}
})