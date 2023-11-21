import express from "express";
import { EventModel } from "../models/Events.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await EventModel.find({});

        res.json(response);
    } catch (error) {
        res.json(error);
    }
});


router.post("/", async (req, res) => {
    const event = new EventModel(req.body);
    req.body.SeatsCapacity = parseInt(req.body.SeatsCapacity, 10);
    console.log("Received request body:", req.body);

    try {
        const newEvent = await EventModel.create(req.body);
        res.json(newEvent);
    } catch (error) {
        console.error("Error saving event:", error);
        res.json(error);
    }
});

// router.delete("/:eventId", async (req, res) => {
//     const eventId = req.params.eventId;

//     try {
//         // Find the event by ID and delete it
//         const deletedEvent = await EventModel.findByIdAndDelete(eventId);

//         if (!deletedEvent) {
//             return res.status(404).json({ message: 'Event not found' });
//         }

//         // Remove the deleted event from users' registeredEvents array
//         await UserModel.updateMany(
//             { registeredEvents: eventId },
//             { $pull: { registeredEvents: eventId } }
//         );

//         res.json({ message: 'Event deleted successfully', deletedEvent });
//     } catch (error) {
//         console.error("Error deleting event:", error);
//         res.status(500).json({ message: 'Error deleting event', error });
//     }
// });

// router.post("/", async (req, res) => {
//     const event = new EventModel(req.body);
//     req.body.SeatsCapacity = parseInt(req.body.SeatsCapacity, 10);
//     console.log("Received request body:", req.body);
//     try {
//         // const response = await event.save();
//         // const newEvent = new EventModel(eventname,genre,imageURL,SeatsCapacity,time);
//         const newEvent = await EventModel.create(req.body);
//         await newEvent.save();
//         res.json(newEvent);
//     } catch (error) {
//         res.json(error);
//     }
// });




// router.post("/", async (req, res) => {
//     // Convert SeatsCapacity to a number
//     req.body.SeatsCapacity = parseInt(req.body.SeatsCapacity, 10);

//     console.log("Received request body:", req.body);
//     try {
//       const event = new EventModel(req.body);
//       const response = await event.save();
//       res.json(response);
//     } catch (error) {
//       console.error("Error saving event:", error);
//       res.status(500).json(error);
//     }
//   });




// router.put("/", async (req, res) => {
//     try {
//         const event = await EventModel.findById(req.body.eventID);
//         const user = await UserModel.findById(req.body.userID);
//         user.registeredEvents.push(event);
//         await user.save();
//         res.json({ registeredEvents: user.registeredEvents });
//     } catch (error) {
//         res.json(error);
//     }
// });

// router.get("/userRegisteredEvents", async (req, res) => {
//     try {
//         const user = await UserModel.findById(req.query.userID);
//         res.json({ registeredEvents: user.registeredEvents });
//     } catch (error) {
//         res.json(error);
//     }
// });

// router.get("/eventsForUser", async (req, res) => {
//     try {
//         const user = await UserModel.findById(req.query.userID);
//         const registeredEvents = await EventModel.find({
//             _id: { $in: user.registeredEvents },
//         });
//         res.json(registeredEvents);
//     } catch (error) {
//         res.json(error);
//     }
// });

export { router as eventRouter };
