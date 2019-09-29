import React from 'react';
import './Styles.css';

export default class Charges extends React.Component{
    render(){
        return(
            <div className = "conatiner">
                <div className="d-flex" style={{marginLeft: "15%"}}>
                    <div className="charges text-center">
                        <h2>Wake up... Charge Up....</h2>
                        <h3>Monday-Friday</h3>
                        <p>Base Fare - Rs.15</p>
                        <p>Rs.4.00/km</p>
                    </div>
                    <div className="charges text-center">
                        <h2>Wow... Its Weekend....</h2>
                        <h3>Saturday-Sunday</h3>
                        <p>Base Fare - Rs.25</p>
                        <p>Rs.6.00/km</p>
                    </div>
                </div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i0.wp.com/www.fusioninformatics.com/blog/wp-content/uploads/2019/02/vogo-app-development-fusion-informatics.jpg" className="d-block w-100" alt="C1"/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://i0.wp.com/www.medianama.com/wp-content/uploads/bike-cc0.jpg?resize=768%2C506&" className="d-block w-100" alt="C2"/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://pbs.twimg.com/media/EEL3BI8UwAEVwD0.jpg" className="d-block w-100" alt="C3"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}