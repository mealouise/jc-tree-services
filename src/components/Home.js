import React from 'react';
import {Link} from 'react-router-dom';
import Quote from '../components/Quote.js';
// import * as Scroll from 'react-scroll';
import '../css/Home.css';


export default function Home() {
    return (
        <div className="home__container" >
            <div className="home__content">
                <h1 id="header">A Growing Force in Tree & Garden Management</h1>
                <p className="home__description">JC Tree Services are a specialist team from Urmston that cover all of Manchester and the North West, Our services include: Tree surgery, felling, crown reduction/ lifting, pruning.</p>
                <p>We specialise in regular garden maintenance, clear ups and all variety's of landscaping from turfing to tree felling. We provide free quotes for all domestic and commercial work.
                we are fully insured, qualifed and licenced to carry out all our work.
                We have all the appropriate equipment and can fit any work around your schedule to suit you.</p>
                <div className="home__button">
                    <Link to="/callback"><button className="home__link">Get a Free Quote</button></Link>
                </div> 
            </div>
            <h1 id="home__subheading">Customer Reviews</h1>
            <Quote />
            {/* <ScrollToTop showUnder={160}>
            <span>UP</span>
            </ScrollToTop> */}

        </div>
    )
}




