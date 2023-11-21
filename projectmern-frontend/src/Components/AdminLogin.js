import './style.css'
import { useState, useEffect } from 'react'
import Events from './Events';

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

export default function AdminLogin() {

    const [allevents, setAllEvents] = useState(LocalStorageEventCards());

    const handelDeleteCard = (id) => {
        console.log(id);
        // let UpdatedEvent = [...allevents]
        // UpdatedEvent.splice(id,1);
        // setAllEvents(UpdatedEvent);
        setAllEvents(allevents.filter((Element, idx) => {
            return idx !== id;
        }))
        localStorage.setItem('AllEventCards', JSON.stringify(allevents));
        alert("Deleted");
    }

    useEffect(() => {
        localStorage.setItem('AllEventCards', JSON.stringify(allevents))
    }, [allevents]);

    return (
        <div className='AdminLogin'>
            <Events eventcard={allevents} DeleteCard={handelDeleteCard} />
        </div>
    )
}
