import React from 'react';
import '../css/Footer.css';

export default function Footer(prop) {
    return (
        <div className="footer__section">
        <ul>
            <li>
                <i className="icon" class="fas fa-map-marker-alt"></i>
                243 Liverpool Rd, Cadishead, Manchester, M44 5DR
            </li>
            <li>
                <i className="icon" class="fas fa-phone"></i>
                0161 915 3508
            </li>
            <li>
                <i className="icon" class="fas fa-mobile-alt"></i>
                07411082686
            </li>
            <li>
                <a href="mailto:joshjmercer@yahoo.co.uk" >
                <i className="icon" class="far fa-envelope-open"></i>
                joshjmercer@yahoo.co.uk
                </a>
            </li>
        </ul>
        <p id="copyright">Copyright 2020 JC Tree Services. All Rights Reserved. Site by 
            <a href="http://emmalouisesheridan.co.uk/" target="_blank"> emmalouisesheridan.co.uk
            </a>
        </p>
        </div>

    )

}
