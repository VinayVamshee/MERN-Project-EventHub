import './style.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import image1 from './Images/EventImage1.jpeg'
// import image2 from './Images/EventImage2.jpeg'
// import image3 from './Images/EventImage3.webp'
// import image4 from './Images/EventImage4.jpeg'

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

export default function EventInfo() {

  // eslint-disable-next-line
  const [allevents, setAllEvents] = useState(LocalStorageEventCards());

  // const PreDefinedEvents = [
  //   {
  //     title: 'Card Title 1',
  //     Description: 'In the symphony of life, a music concert is where the heart finds its rhythm, and the soul dances to the melody of shared emotions.',
  //     image: image1,
  //     genre: 'Music',
  //     owner: 'Srinivas Manem',
  //     time: '10:00 AM',
  //     SeatsAvailable: '100'
  //   },
  //   {
  //     title: 'Card Title 2',
  //     Description: '2 2 2 In the symphony of life, a music concert is where the heart finds its rhythm, and the soul dances to the melody of shared emotions.',
  //     image: image2,
  //     genre: 'dance',
  //     owner: 'Suchi Reddy',
  //     time: '15:00 AM',
  //     SeatsAvailable: '100'
  //   },
  //   {
  //     title: 'Card Title 3',
  //     Description: '3 3 3 In the symphony of life, a music concert is where the heart finds its rhythm, and the soul dances to the melody of shared emotions.',
  //     image: image3,
  //     genre: 'comedy',
  //     owner: 'Akash Varma',
  //     time: '18:00 AM',
  //     SeatsAvailable: '100'
  //   },
  //   {
  //     title: 'Card Title 4',
  //     Description: '4 4 4 In the symphony of life, a music concert is where the heart finds its rhythm, and the soul dances to the melody of shared emotions.',
  //     image: image4,
  //     genre: 'Motivation',
  //     owner:'Vinay Vamshee',
  //     time: '12:00 AM',
  //     SeatsAvailable: '100'
  //   }
  // ]

  return (
    <EventInfoFunction EventsDetails={allevents} />
    // <EventInfoFunction EventsDetails={allevents} PreDefinedEventDetails={PreDefinedEvents} />
  )
}

function EventInfoFunction({ EventsDetails = [{}], PreDefinedEventDetails = [{}] }) {

  const [Buyer, SetBuyer] = useState({
    BuyerEmail: ' ',
    BuyerName: ' ',
    BuyerAddress: ' ',
    NoOfTickets: ' '
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/bookings",
        { ...Buyer },
      );
      alert("Bought Tickets");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {
        EventsDetails.map((Element, idx) => {
          return (
            <div className='EventsInfo' key={idx}>
              <div>
                <img src={Element.imageUrl} style={{ height: '600px', width: '600px', objectFit: 'cover' }} alt='...' />
              </div>
              <div className='Info'>
                <div className='Info-Sub' style={{ fontFamily: 'impact' }}>Name: <div className='Info-Details' style={{ fontFamily: 'monospace' }}>{Element.eventname}</div></div>
                <div className='Info-Sub' style={{ fontFamily: 'impact' }}>Genre: <div className='Info-Details' style={{ fontFamily: 'monospace' }}>{Element.genre}</div></div>
                <div className='Info-Sub' style={{ fontFamily: 'impact' }}>Description: <div className='Info-Details' style={{ fontFamily: 'monospace' }}>{Element.description}</div></div>
                <div className='Info-Sub' style={{ fontFamily: 'impact' }}>Event Organizer: <div className='Info-Details' style={{ fontFamily: 'monospace' }}>{Element.Owner}</div></div>
                <div className='Info-Sub' style={{ fontFamily: 'impact' }}>Time: <div className='Info-Details' style={{ fontFamily: 'monospace' }}>{Element.time}</div></div>
                <div className='Info-Sub' style={{ fontFamily: 'impact' }}>Total Seats: <div className='Info-Details' style={{ fontFamily: 'monospace' }}>{Element.SeatsCapacity}</div></div>
                <div className='mt-5 d-flex justify-content-between'>
                  <Link to="/" className="btn btn-primary d-flex justify-content-center align-items-center" style={{ height: '40px', width: '100px', fontFamily: 'impact' }}>
                    Go Back
                  </Link>
                  <button type="button" className="btn btn-primary d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#BuyTicketsModal" style={{ height: '40px', width: '120px', fontFamily: 'impact' }}>
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          )
        })
      }
      {/* {
        PreDefinedEventDetails.map((Element, idx) => {
          return (
            <div className='EventsInfo' key={idx}>
              <div>
                <img src={Element.image} style={{ height: '600px', width: '600px', objectFit: 'cover' }} alt='...' />
              </div>
              <div className='Info'>
                <div className='Info-Sub'>Name: <div className='Info-Details'>{Element.title}</div></div>
                <div className='Info-Sub'>Genre: <div className='Info-Details'>{Element.genre}</div></div>
                <div className='Info-Sub'>Description: <div className='Info-Details'>{Element.Description}</div></div>
                <div className='Info-Sub'>Event Organizer: <div className='Info-Details'>{Element.Owner}</div></div>
                <div className='Info-Sub'>Time: <div className='Info-Details'>{Element.time}</div></div>
                <div className='Info-Sub'>Total Seats: <div className='Info-Details'>{Element.SeatsCapacity}</div></div>
                <div className='mt-5 d-flex justify-content-between'>
                  <Link to="/" className="btn btn-primary d-flex justify-content-center align-items-center" style={{ height: '40px', width: '100px' }}>
                    Go Back
                  </Link>
                  <button type="button" className="btn btn-primary d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#BuyTicketsModal" style={{ height: '40px', width: '120px' }}>
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          )
        })
      } */}
      <div className="modal fade" id="BuyTicketsModal" tabIndex="-1" aria-labelledby="BuyTicketsModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form className='BuyTicketsForm' onSubmit={handleSubmit} style={{ fontFamily: 'monospace' }}>
              <h1 className="h3 mb-3 fw-normal" id="BuyTicketsModalLabel" style={{ fontFamily: 'impact' }}>Please Fill In The Details</h1>
              <div className="form-floating">
                <input type="email" className="form-control" id="BuyerEmail" value={Buyer.BuyerEmail} onChange={(event) => SetBuyer({ ...Buyer, BuyerEmail: event.target.value })} placeholder="name@example.com" data-temp-mail-org="0" />
                <label htmlFor="EmailAddress">Email address</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" id="Name" value={Buyer.BuyerName} onChange={(event) => SetBuyer({ ...Buyer, BuyerName: event.target.value })} placeholder="Name" />
                <label htmlFor="BuyerName">Name</label>
              </div>
              <div className="form-floating">
                <input type="number" className="form-control" id="NoOfTickets" value={Buyer.NoOfTickets} onChange={(event) => SetBuyer({ ...Buyer, NoOfTickets: event.target.value })} placeholder="Tickets" />
                <label htmlFor="NoOfTickets">No of Tickets</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" id="BuyerAddress" value={Buyer.BuyerAddress} onChange={(event) => SetBuyer({ ...Buyer, BuyerAddress: event.target.value })} placeholder="Your Address" />
                <label htmlFor="BuyerAddress">Address</label>
              </div>
              <button className="btn btn-primary w-100 py-2" type="submit" style={{ fontFamily: 'impact' }}>Buy Now</button>
            </form>
          </div>
        </div>
      </div>
      {/* </div > */}
    </>
  )
}
