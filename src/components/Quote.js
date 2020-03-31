import React,{useState} from 'react';
import '../css/Quote.css';
import classNames from "classnames";
// import {Link} from 'react-router-dom';




const Quote = () => {

    const quotes = {
        0: {
            customer: "SarahR-60",
            quote: "Best of price of 3 quotes I had. 2 work men both very pleasant, courteous and helpful. Work was carried out quickly but safely. Was kept informed of the work they were doing. Very happy with what they did. Would highly recommend."
        },
        1: {
            customer: "Annod Rokec",
            quote: "I'd definitely recommend Josh and his team. Quoted a great price for what I wanted doing. Came early this morning with his team, they were efficient and extremely quick! Cleaned up afterwards and now my back hedges are at a height where I can see sunlight!"
        },
        2: {
            customer: "Barbara Eastwood",
            quote: "Josh and 2 other gents came this morning to do jobs in my garden. They cut down a holly tree, about 8ft high, thinned numerous trees and large bushes. They worked so very hard and quickly and NOTHING was left, no mess or anything. I would highly recommend this company. My garden looks fabulous and it's all thanks to JC Tree Services. I am more than happy with the work done Thankyou so very, very much. Defo would use them again. So would my neighbours who have commented on your work."
        },
        3: {
            customer: "Debbie Steel",
            quote: "Josh gave a reasonable and competitive quote in comparison to others. He and his team have done a brilliant job removing a tree from our garden. They were even able to grind down and remove the stump so there’s nothing left. They did a good job clearing up after and put things back in their place around the garden. Highly recommend Josh for any tree work!!"
        },
        4: {
            customer: "Linda Teo",
            quote: "Josh and his team did a great job with our garden! We needed a lot doing - tree stump grinding, raised bed brick wall removable, gravel stones removal, edging etc. I was having a hard time trying to find someone who could do them all instead of hiring 2 different companies. They came, did their magic and also cleaned up all the bits too. Thank you very much - will certainly recommend and use again!"
        },
        5: {
            customer: "Sarah Handy",
            quote: "The guys did an absolutely amazing job of taking down 2 large trees, nightmare job due to large branches going over neighbours gardens and access was via a small alley. This didn’t stop them, really happy with the finished look so we can now finally get our garden finished and ready for summer. Really friendly guys and would highly recommend."
        },
        6: {
            customer: "Luda Russell",
            quote: "Josh and the team have done an amazing job on our garden. We had to have quite a few conifers removed in order to be able to put the fence up, old panels needed changing and we needed a new gate. Everything was done within 3 days and he was a pleasure to deal with. I would definitely recommend Josh and his team.Thank you!"
        },

    }

    const [currentIndex, setCurrentIndex] = useState(0)

    const [active, setActive] = useState(0)

    const handleSetClick = (index) => {
        // console.log("hello")
        setCurrentIndex(index)
    }
    
    console.log(currentIndex)

    return (
        <div className="Quote__content">
            <p>{quotes[currentIndex].quote}</p>
            <p>{quotes[currentIndex].customer}</p>
            <div className="Quote__container">
                {Object.keys(quotes).map(index => (
                    <span
                        className={
                            classNames(
                              "Quote__button",
                              index === currentIndex && "Quote__button--active"
                            )
                        }
                        onClick={event => handleSetClick(index)}
                        data-quote={index}
                        key={index} 
                    />
                ))}
            </div>
        </div>
    )

}

export default Quote