// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";

// export default function CreateEvent () {
// //   const userID = useGetUserID();
//   const [cookies, _] = useCookies(["access_token"]);
//   const [event, setEvent] = useState({
//     eventname: "",
//     genre: "",
//     imageUrl: "",
//     seatsAvailable: 0
//     // userOwner: userID,
//   });

//   const navigate = useNavigate();
 


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // try {
//     //   await axios.post(
//     //     "http://localhost:3001/recipes",
//     //     { ...event },
//     //     {
//     //       headers: { authorization: cookies.access_token },
//     //     }
//     //   );

//     //   alert("Event Created");
//     //   navigate("/");
//     // } catch (error) {
//     //   console.error(error);
//     // }
//   };

//   return (
//     <div className="create-event">
//       <h2>Create Event</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="eventname">Name</label>
//         <input
//           type="text"
//           id="eventname"
//           name="name"
//           value={events.eventname}
          
//         />
//         <label htmlFor="description">Description</label>
//         <textarea
//           id="genre"
//           name="genre"
//           value={events.genre}

//         ></textarea>

//         <label htmlFor="seatsAvailable">Instructions</label>
//         <textarea
//           id="seatsAvailable"
//           name="seats"
//           type="number"
//           value={events.seatsAvailable}

//         ></textarea>
//         <label htmlFor="imageUrl">Image URL</label>
//         <input
//           type="text"
//           id="imageUrl"
//           name="imageUrl"
//           value={events.imageUrl}

//         />
//         <button type="submit">Add Event</button>
//       </form>
//     </div>
//   );
// };