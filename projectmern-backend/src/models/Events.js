import mongoose from "mongoose";



const EventSchema = new mongoose.Schema({
    eventname: { type: String, required: true },
    genre: { type: String, required: true },
    description: { type: String, required: true },
    Owner: { type: String, required: true },
    imageUrl: { type: String, required: true },
    imageUrl2: { type: String, required: true },
    SeatsCapacity: { type: Number, required: true },
    time: { type: Number, required: true },
    //    userOwner : {type:mongoose.Schema.Types.ObjectId,ref:"users"},   //for maintaining the record of the user logged in and using the portal currently
});

export const EventModel = mongoose.model("events", EventSchema);
