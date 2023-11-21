import './style.css'
import React from 'react'
import Logo from './Logo'

export default function Footer() {
    return (
        <div className='footer bg-dark text-light'>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3" >
                        <p className="text-light d-flex justify-content-between align-items-center" style={{ width: '300px' }}> <Logo /> @ Event Hub, Since 2023 </p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h5>Managment Info</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><button className="btn text-light">Home</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light">Features</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light">Pricing</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light">FAQs</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light" data-bs-toggle="modal" data-bs-target="#ContactInfo">Contact Info</button></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Managment Info</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><button className="btn text-light">Home</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light">Features</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light">Pricing</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light">FAQs</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light" data-bs-toggle="modal" data-bs-target="#ContactInfo">Contact Info</button></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Managment Info</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><button className="btn text-light">Home</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light">Features</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light">Pricing</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light">FAQs</button></li>
                            <li className="nav-item mb-2"><button className="btn text-light" data-bs-toggle="modal" data-bs-target="#ContactInfo">Contact Info</button></li>
                        </ul>
                    </div>
                </footer>
            </div>
            {/* Modal */}
            <div className="modal fade text-dark" id="ContactInfo" tabIndex="-1" aria-labelledby="ContactInfoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <h2 className="fw-bold text-center mt-2" id="ContactInfoLabel" style={{ fontFamily: 'impact' }}>Contact Info</h2>
                        <div className='row'>
                            <ul className="d-grid gap-4 my-5 list-unstyled small col">
                                <li className="d-flex gap-4">
                                    <div className='mx-3 '>
                                        <h5 style={{ fontFamily: 'impact' }}><i className="fa-solid fa-envelope fa-beat fa-xl me-3" style={{ color: '#000000' }} /> Email Address</h5>
                                        EventManager@gmail.com
                                    </div>
                                </li>
                                <li className="d-flex gap-4">
                                    <div className='mx-3 '>
                                        <h5 style={{ fontFamily: 'impact' }}><i className="fa-solid fa-phone fa-shake fa-xl me-3" style={{ color: '#000000' }} />Phone Number</h5>
                                        +91 9874312065
                                    </div>
                                </li>
                            </ul>
                            <ul className="d-grid gap-4 my-5 list-unstyled small col">
                                <li className="d-flex gap-4">
                                    <div className="mx-3">
                                        <h5 style={{ fontFamily: 'impact' }}><i className="fa-solid fa-building fa-flip fa-xl me-3" style={{ color: '#000000' }} />Office Address</h5>
                                        Q Block, Vellore, TN
                                    </div>
                                </li>
                                <li className="d-flex gap-4">
                                    <div className="mx-3">
                                        <h5 style={{ fontFamily: 'impact' }}><i class="fa-solid fa-location-dot fa-xl fa-bounce me-3"></i>Event Venue</h5>
                                        SJT BackSide, VIT , Vellore
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-lg btn-primary mx-5 mb-3" data-bs-dismiss="modal" style={{ fontFamily: 'impact' }}>Okay, thanks!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
