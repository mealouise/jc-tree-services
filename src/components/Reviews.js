import React from 'react';
import classNames from "classnames";
import '../css/Reviews.css';
// import {Link} from 'react-router-dom';



export default function Reviews() {
    return (
        <div className="reviews__container" >
        <h1 id="reviews__header">Our Customers Say..</h1>
            <ul className="reviews__list">
                <li>
                    <h3>SarahR-60</h3>
                    <p className="reviews__text">Best of price of 3 quotes I had. 2 work men both very pleasant, courteous and helpful. Work was carried out quickly but safely. Was kept informed of the work they were doing. Very happy with what they did. Would highly recommend.</p>
                </li><br/>
                <li>
                    <h3>Annod Rokec</h3>
                    <p className="reviews__text">I'd definitely recommend Josh and his team. Quoted a great price for what I wanted doing. Came early this morning with his team, they were efficient and extremely quick! Cleaned up afterwards and now my back hedges are at a height where I can see sunlight!</p>
                </li><br/>
                <li>
                    <h3>Barbara Eastwood</h3>
                    <p className="reviews__text">Josh and 2 other gents came this morning to do jobs in my garden. They cut down a holly tree, about 8ft high, thinned numerous trees and large bushes. They worked so very hard and quickly and NOTHING was left, no mess or anything. I would highly recommend this company. My garden looks fabulous and it's all thanks to JC Tree Services. I am more than happy with the work done Thankyou so very, very much. Defo would use them again. So would my neighbours who have commented on your work.</p>
                </li><br/>
                <li>
                    <h3>Debbie Steel</h3>
                    <p className="reviews__text">Josh gave a reasonable and competitive quote in comparison to others. He and his team have done a brilliant job removing a tree from our garden. They were even able to grind down and remove the stump so there’s nothing left. They did a good job clearing up after and put things back in their place around the garden. Highly recommend Josh for any tree work!!</p>
                </li><br/>
                <li>
                    <h3>Linda Teo</h3>
                    <p className="reviews__text">Josh and his team did a great job with our garden! We needed a lot doing - tree stump grinding, raised bed brick wall removable, gravel stones removal, edging etc. I was having a hard time trying to find someone who could do them all instead of hiring 2 different companies. They came, did their magic and also cleaned up all the bits too. Thank you very much - will certainly recommend and use again!</p>
                </li><br/>
                <li>
                    <h3>Sarah Handy</h3>
                    <p className="reviews__text">The guys did an absolutely amazing job of taking down 2 large trees, nightmare job due to large branches going over neighbours gardens and access was via a small alley. This didn’t stop them, really happy with the finished look so we can now finally get our garden finished and ready for summer. Really friendly guys and would highly recommend</p>
                </li><br/>
                <li>
                    <h3>Luda Russell</h3>
                    <p className="reviews__text">Josh and the team have done an amazing job on our garden. We had to have quite a few conifers removed in order to be able to put the fence up, old panels needed changing and we needed a new gate. Everything was done within 3 days and he was a pleasure to deal with. I would definitely recommend Josh and his team.Thank you!</p>
                </li><br/>
            </ul>

        </div>
    )
}