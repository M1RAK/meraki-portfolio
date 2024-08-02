import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from "react-loaders";
import './index.scss'

const Contact = () => {
    return(
        <>
        <div className="container contact-page">
            <div className="left-grid">
            <h1>
            Contact Me
            </h1>
            <p>
               Got a project in mind ? <br />
               if you have other questions, don't hesitate to contact me using the form below.
            </p>
            <div className="form">
            <div className="contact-form">
                <form 
                 action="https://formspree.io/f/mwkjabwv"
                 method='POST'>
                    {/* <input name="_redirect"
                     type="hidden" id="name"
                      value="http:localhost:5173/"></input> */}
                    <ul>
                        <li className="half">
                            <input
                            type="text"
                            name='name'
                            placeholder='Name'
                            required
                            />
                        </li>
                        <li className="half">
                            <input
                            type="text"
                            name='email'
                            placeholder='Email'
                            required
                            />
                        </li>
                        <li>
                            <input
                            placeholder='Subject'
                            type='text'
                            name='subject'
                            required />
                        </li>
                        <li>
                            <textarea 
                            placeholder='Message'
                            name="message"
                            required
                            ></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value='SEND' />
                        </li>
                    </ul>
                </form>
            </div>
            </div>
            </div>
            <div className="right-grid">
            <div className="map-wrapper">
            <MapContainer center={[11.99195, 8.51890]} zoom={16}>
              <TileLayer  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
              <Marker position={[11.99195, 8.51890]}>
                 <Popup>I used to live here...</Popup>
              </Marker>
            </MapContainer>
        </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact