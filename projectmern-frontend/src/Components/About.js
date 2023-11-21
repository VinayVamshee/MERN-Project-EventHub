import './style.css'
import VinayVamshee from './Images/VinayVamshee.jpeg'
import Akash from './Images/Akash.jpg'
import Manem from './Images/Manem.jpeg'
import Reddy from './Images/Reddy.jpeg'
import Aneesh from './Images/Aneesh.jpeg'
import React from 'react'

export default function About() {
    return (
        <div>
            <div className="about-section bg-dark text-light">
                <h1 style={{ fontFamily: 'impact' }}>About Us</h1>
                <p style={{ fontFamily: 'monospace' }}>
                    Welcome to Your Event Hub, where we turn ordinary moments into
                    extraordinary memories! As a premier event management company, we
                    specialize in bringing your dreams to life, one event at a time. Our
                    passion for creating unforgettable experiences is at the heart of
                    everything we do.Your Event Hub is more than a service; it's a
                    partnership. We are here to make your event dreams come true. Contact us
                    today to start the journey to an unforgettable experience that will be
                    talked about for years to come. Your story deserves to be told, and we
                    can't wait to help you tell it in the most magical way possible.
                </p>
            </div>

            <h2 className='mt-3' style={{ textAlign: 'center', fontFamily: 'impact' }}>Our Team</h2>
            <div className="row d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                <div className="ms-3 column">
                    <div className="Aboutcard Event-hover">
                        <img src={Manem} alt="img" style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
                        <div className="Aboutcontainer">
                            <h2 className='d-flex justify-content-center mt-2' style={{ fontFamily: 'impact' }}>Srinivas Mannem</h2>
                            <p className="Abouttitle">Backend Developer</p>
                            <p className='carddescription' style={{ fontFamily: 'monospace' }}>
                                Mannem's expertise lies in creating the backbone of the Your Event
                                Magic website, ensuring its functionality is as seamless as the
                                events we organize.
                            </p>
                            <p className="Aboutbutton">mannem.srinivas2021@vitstudent.ac.in</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="Aboutcard Event-hover">
                        <img src={VinayVamshee} alt="img" style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
                        <div className="Aboutcontainer">
                            <h2 className='d-flex justify-content-center mt-2' style={{ fontFamily: 'impact' }}>Vinay Vamshee</h2>
                            <p className="Abouttitle">Frontend Developer</p>
                            <p className='carddescription' style={{ fontFamily: 'monospace' }}>
                                Vinay Vamshee is our Frontend Maestro, His attention to detail,
                                creativity, and mastery of front-end technologies ensure that
                                navigating our website is as delightful as attending one of our
                                events.
                            </p>
                            <p className="Aboutbutton">pechettivinay.vamshee@vitstudent.ac.in</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="Aboutcard Event-hover">
                        <img src={Akash} alt="img" style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
                        <div className="Aboutcontainer">
                            <h2 className='d-flex justify-content-center mt-2' style={{ fontFamily: 'impact' }}>Addala Akash Varma</h2>
                            <p className="Abouttitle">Backend Developer</p>
                            <p className='carddescription' style={{ fontFamily: 'monospace' }}>
                                With a deep understanding of server-side technologies and a knack
                                for problem-solving, Akash has built a robust, secure, and
                                scalable backend infrastructure.
                            </p>
                            <p className="Aboutbutton">addalaakash.varma2021@vitstudent.ac.in</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="Aboutcard Event-hover">
                        <img src={Reddy} alt="img" style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
                        <div className="Aboutcontainer">
                            <h2 className='d-flex justify-content-center mt-2' style={{ fontFamily: 'impact' }}>Suchandra Reddy J</h2>
                            <p className="Abouttitle">Frontend Developer</p>
                            <p className='carddescription' style={{ fontFamily: 'monospace' }}>
                                Suchandra Reddy is responsible for the captivating visual elements
                                that make the Your Event Hub website a feast for the eyes.
                            </p>
                            <p className="Aboutbutton">suchandrareddy.j2021@vitstudent.ac.in</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="Aboutcard Event-hover">
                        <img src={Aneesh} alt="img" style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
                        <div className="Aboutcontainer">
                            <h2 className='d-flex justify-content-center mt-2' style={{ fontFamily: 'impact' }}>Aneesh Ponnaganti</h2>
                            <p className="Abouttitle">Backend Developer</p>
                            <p className='carddescription' style={{ fontFamily: 'monospace' }}>
                                Aneesh ponnaganti, our Frontend Architect and the wizard behind the
                                scenes.
                            </p>
                            <p className="Aboutbutton">aneesh.ponnaganti2021@vitstudent.ac.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
