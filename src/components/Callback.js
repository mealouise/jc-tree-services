import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Callback.css';


export default function Callback(prop) {
    return (
        <div className="callback__layout">

            <div className="callback__content">
                <header className="callback__header">Request a Callback</header>
                <form action="mailto:someone@example.com" method="post" enctype="text/plain">
                    <input className="callback__type" type="text" onfocus="this.value=''" name="name" placeholder="Your Name"/><br/><br/>
        
                    <input className="callback__type" type="email" name="email" placeholder="Email" /><br/><br/>
                    <input className="callback__type" type="number" name="telephone" placeholder="Phone no" /><br/><br/>
                    <textarea className="callback__type" rows="4" cols="50" placeholder="How can JC Tree Services help you?"/><br/><br/>
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"></input>
                    <button className="callback__type" type="submit" value="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}