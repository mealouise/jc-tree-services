import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/About.css';
import profile from '../images/profile.png';
import felling1 from '../images/felling1.jpg';
import felling2 from '../images/felling2.jpg';



export default function About() {
    return (
        <div className="about__description">
            <div className="about__content">
                <div className="about__headings">
                    <h2>About Us</h2>
                    <p className="about__paragraph">JC Tree Services are a specialist team from Urston covering Manchester and the North West, fully NTPC & Lantra Award qualified. We have public liability, indemnity £5m and employers insurance up to £10m.</p>
                    <h2>We care for the environment</h2>
                    <p className="about__paragraph">Where possible we always try to advice the client on what’s best for the tree and preserve them if possible, if removal is necessary then we encourage replanting. We can supply and plant new trees for your gardens/projects sourced from high quality nursery.</p>
                </div>
                <div className="about__images">
                    <div className="about__felling">
                        <img src={felling1} alt="about-felling" />
                        <img src={felling2} alt="about-felling" />
                    </div>
                    <div>
                        <img className="about__profile" src={profile} alt="about-profile" />
                    </div>
                </div>
            </div>
        </div>

    )
}