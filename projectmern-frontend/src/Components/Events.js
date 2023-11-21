import "./style.css";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import image1 from './Images/EventImage1.jpeg'
import Flipimage1 from './Images/FlipEventImage1.jpeg'
import image2 from './Images/EventImage2.jpeg'
import Flipimage2 from './Images/FlipEventImage2.jpeg'
import image3 from './Images/EventImage3.jpeg'
import Flipimage3 from './Images/FlipEventImage3.webp'
import image4 from './Images/EventImage4.png'
import Flipimage4 from './Images/FlipEventImage4.jpeg'
import image5 from './Images/EventImage5.jpeg'
import Flipimage5 from './Images/FlipEventImage5.jpeg'

const LocalStorageEventCards = () => {
  let AllEventCard = localStorage.getItem('AllEventCards');
  if (AllEventCard) {
    return (
      JSON.parse(localStorage.getItem('AllEventCards'))
    )
  }
  else {
    return [];
  }
}

export default function Events({ eventcard = [{}], key = {}, DeleteCard }) {

  // eslint-disable-next-line 
  const [allevents, setAllEvents] = useState(LocalStorageEventCards());

  // eslint-disable-next-line 
  const [Buyer, SetBuyer] = useState({
    BuyerEmail: ' ',
    BuyerName: ' ',
    BuyerAddress: ' ',
    NoOfTickets: ' '
  });

  const location = useLocation();
  const form = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Send Email
    emailjs.sendForm('service_1ksgfkq', 'template_o115u81', form.current, 'ss9CQ81YavvBu3-nr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    //MongoDB
    try {
      await axios.post(
        "http://localhost:3001/bookings",
        { ...Buyer },
      );
    } catch (error) {
      console.error(error);
    }

    alert("Tickets Bought && Mail Sent");
  };

  const PreDefinedEvents = [
    {
      title: 'Guitar Concert',
      Description: 'Dive into a world of musical magic with a guitar concert – where every strum is a story, and each note paints a melody in the air.',
      image: image1,
      image2: Flipimage1,
      genre: 'Music',
      owner: 'Srinivas Manem',
      time: '10:00 AM',
      SeatsAvailable: '100'
    },
    {
      title: 'Musical Concert',
      Description: 'Embark on a sonic adventure at our music concert, where melodies weave tales and rhythms stir the soul. Join us for an unforgettable night of harmonious enchantment.',
      image: image2,
      image2: Flipimage2,
      genre: 'dance',
      owner: 'Suchi Reddy',
      time: '15:00 AM',
      SeatsAvailable: '100'
    },
    {
      title: 'Ted X',
      Description: 'Ignite your curiosity at our TED Talks event, where ideas spark, and innovation takes the stage in a captivating exploration of knowledge.',
      image: image3,
      image2: Flipimage3,
      genre: 'comedy',
      owner: 'Vinay Vamshee',
      time: '18:00 AM',
      SeatsAvailable: '100'
    },
    {
      title: 'StandUp Comedy',
      Description: 'Join us for a laughter-packed night at our stand-up comedy event, where jokes land, and every punchline is a burst of joy!',
      image: image4,
      image2: Flipimage4,
      genre: 'Motivation',
      owner: 'Akash Varma',
      time: '12:00 AM',
      SeatsAvailable: '100'
    }
  ]

  return (
    <>
      <div className="d-flex justify-content-center bg-dark mt-2 text-light" style={{ fontSize: '35px', fontFamily: 'cursive', fontWeight: 'bolder' }}>Events Now</div>
      <div className="EventsNow">
        <div className="row">
          {
            PreDefinedEvents.map((Element, idx) => {
              return (
                <div className="col-2 Event-hover" key={idx}>
                  <div className="card shadow" style={location.pathname === '/AdminLogin' ? { width: "280px", height: "650px" } : { width: '280px', height: '600px' }}>
                    <div className="Flipcontainer">
                      <div className="Flipcard">
                        <div className="frontimg">
                          <img src={Element.image} alt="..." className="card-img-top" style={{ height: '340px', objectFit: 'cover' }} />
                        </div>
                        <div className="backimg">
                          <img src={Element.image2} alt="..." className="card-img-top" style={{ height: '340px', objectFit: 'cover' }} />
                        </div>
                      </div>
                    </div>

                    {/* <img src={Element.image} className="card-img-top" alt="..." style={{ height: '340px', objectFit: 'cover' }} /> */}
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontFamily: 'AppleChancery', fontWeight: 'bold', fontSize: '27px' }}>{Element.title}</h5>
                      <p className="card-text" style={{ height: '140px' }}>
                        {Element.Description}
                      </p>
                      <Link to='/EventInfo' className="btn btn-primary me-3" style={{ fontFamily: 'impact' }}>More Info</Link>
                      <button type="button" className="btn btn-primary" style={{ fontFamily: 'impact' }} data-bs-toggle="modal" data-bs-target="#BuyTicketsModal">Buy Tickets</button>
                      {
                        location.pathname === '/AdminLogin' ?
                          <button type="button" className="btn btn-danger mt-2 disabled" style={{ fontFamily: 'impact' }} onClick={() => DeleteCard(idx)}><i className="fa-solid fa-trash fa-lg me-2" />Delete</button>
                          : null
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="d-flex justify-content-center bg-dark mt-2 text-light" style={{ fontSize: '35px', fontFamily: 'cursive', fontWeight: 'bolder' }}>Upcoimng Events</div>
      <div className="EventsUpcoming ">
        <div className="row">
          <div className="col-2 Event-hover">
            <div className="card shadow" style={location.pathname === '/AdminLogin' ? { width: "280px", height: "650px" } : { width: '280px', height: '600px' }}>
              <div className="Flipcontainer">
                <div className="Flipcard">
                  <div className="frontimg">
                    <img src={image4} alt="..." className="card-img-top" style={{ height: '340px', objectFit: 'cover' }} />
                  </div>
                  <div className="backimg">
                    <img src={Flipimage4} alt="..." className="card-img-top" style={{ height: '340px', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              {/* <img src={image4} className="card-img-top" alt="..." style={{ height: '350px', objectFit: 'cover' }} /> */}
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: 'AppleChancery', fontWeight: 'bold', fontSize: '27px' }}>Standup Comedy</h5>
                <p className="card-text" style={{ height: '140px' }}>Join us for a laughter-packed night at our stand-up comedy event, where jokes land, and every punchline is a burst of joy!
                </p>
                <Link to='/EventInfo' className="btn btn-primary me-3" style={{ fontFamily: 'impact' }}>More Info</Link>
                <button type="button" className="btn btn-primary" style={{ fontFamily: 'impact' }} data-bs-toggle="modal" data-bs-target="#BuyTicketsModal">Buy Tickets</button>
                {
                  location.pathname === '/AdminLogin' ?
                    <button type="button" className="btn btn-danger mt-2" style={{ fontFamily: 'impact' }}><i className="fa-solid fa-trash fa-lg me-2" />Delete</button>
                    : null
                }
              </div>
            </div>
          </div>
          <div className="col-2 Event-hover">
            <div className="card shadow" style={location.pathname === '/AdminLogin' ? { width: "280px", height: "650px" } : { width: '280px', height: '600px' }}>
              <div className="Flipcontainer">
                <div className="Flipcard">
                  <div className="frontimg">
                    <img src={image5} alt="..." className="card-img-top" style={{ height: '340px', objectFit: 'cover' }} />
                  </div>
                  <div className="backimg">
                    <img src={Flipimage5} alt="..." className="card-img-top" style={{ height: '340px', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              {/* <img src={image5} className="card-img-top" alt="..." style={{ height: '350px', objectFit: 'cover' }} /> */}
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: 'AppleChancery', fontWeight: 'bold', fontSize: '27px' }}>Dance Show</h5>
                <p className="card-text" style={{ height: '140px' }}>
                  Join us for a night of captivating dance, where every move is a story and each performance is a visual masterpiece. Don't miss the rhythm and enchantment!
                </p>
                <Link to='/EventInfo' className="btn btn-primary me-3" style={{ fontFamily: 'impact' }}>More Info</Link>
                <button type="button" className="btn btn-primary" style={{ fontFamily: 'impact' }} data-bs-toggle="modal" data-bs-target="#BuyTicketsModal">Buy Tickets</button>
                {
                  location.pathname === '/AdminLogin' ?
                    <button type="button" className="btn btn-danger mt-2" style={{ fontFamily: 'impact' }}><i className="fa-solid fa-trash fa-lg me-2" />Delete</button>
                    : null
                }
              </div>
            </div>
          </div>
          {
            eventcard.map((Element, idx) => {
              return (
                <div key={idx} className="col-2 Event-hover">
                  <div className="card shadow" style={location.pathname === '/AdminLogin' ? { width: "280px", height: "650px" } : { width: '280px', height: '600px' }}>

                    <div className="Flipcontainer">
                      <div className="Flipcard">
                        <div className="frontimg">
                          <img src={Element.imageUrl} alt="..." className="card-img-top" style={{ height: '340px', objectFit: 'cover' }} />
                        </div>
                        <div className="backimg">
                          <img src={Element.imageUrl2} alt="..." className="card-img-top" style={{ height: '340px', objectFit: 'cover' }} />
                        </div>
                      </div>
                    </div>

                    {/* <img src={Element.imageUrl} className="card-img-top" alt="..." style={{ height: '350px', objectFit: 'cover' }} /> */}
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontFamily: 'AppleChancery', fontWeight: 'bold', fontSize: '27px' }}>{Element.eventname}</h5>
                      <p className="card-text" style={{ height: '140px' }}>
                        {Element.description}
                      </p>
                      <Link to='/EventInfo' className="btn btn-primary me-3" style={{ fontFamily: 'impact' }}>More Info</Link>
                      <button type="button" className="btn btn-primary" style={{ fontFamily: 'impact' }} data-bs-toggle="modal" data-bs-target="#BuyTicketsModal">Buy Tickets</button>
                      {
                        location.pathname === '/AdminLogin' ?
                          <button type="button" className="btn btn-danger mt-2" style={{ fontFamily: 'impact' }} onClick={() => DeleteCard(idx)}><i className="fa-solid fa-trash fa-lg me-2" />Delete</button>
                          : null
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="modal fade" id="BuyTicketsModal" tabIndex="-1" aria-labelledby="BuyTicketsModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form className='BuyTicketsForm' ref={form} onSubmit={handleSubmit} style={{ fontFamily: 'monospace' }}>
              <h1 className="h3 mb-3 fw-normal" id="BuyTicketsModalLabel" style={{ fontFamily: 'impact' }}>Please Fill In The Details</h1>
              <div className="form-floating">
                <input type="email" className="form-control" name="BuyerEmail" value={Buyer.BuyerEmail} onChange={(event) => SetBuyer({ ...Buyer, BuyerEmail: event.target.value })} placeholder="name@example.com" data-temp-mail-org="0" />
                <label htmlFor="EmailAddress">Email address</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" name="Name" value={Buyer.BuyerName} onChange={(event) => SetBuyer({ ...Buyer, BuyerName: event.target.value })} placeholder="Name" />
                <label htmlFor="BuyerName">Name</label>
              </div>
              <div className="form-floating">
                <input type="number" className="form-control" name="NoOfTickets" value={Buyer.NoOfTickets} onChange={(event) => SetBuyer({ ...Buyer, NoOfTickets: event.target.value })} placeholder="Tickets" />
                <label htmlFor="NoOfTickets">No of Tickets</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" name="BuyerAddress" value={Buyer.BuyerAddress} onChange={(event) => SetBuyer({ ...Buyer, BuyerAddress: event.target.value })} placeholder="Your Address" />
                <label htmlFor="BuyerAddress">Address</label>
              </div>
              <button className="btn btn-primary w-100 py-2" data-bs-dismiss="modal" type="submit" style={{ fontFamily: 'impact' }}>Buy Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
