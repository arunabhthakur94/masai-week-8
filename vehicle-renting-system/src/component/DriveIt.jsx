import React from 'react';
import './Styles.css';

export default class DriveIt extends React.Component{
    render(){
        return(
            <div className = "conatiner font-style text-style">
                <div>
                    <h1>Rent it.Ride it.Return it.</h1>
                    <h3>Pocket-Friendly...@ Rs.4/km*</h3>
                    <img src="https://d1hl0z0ja1o93t.cloudfront.net/wp-content/uploads/2017/11/28114502/scooters.jpg" alt="background" width= "100%"/>
                </div>

                <div>
                    <h1>Why rent our bike?</h1>
                    <div className="d-flex">
                        <div>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://i0.wp.com/cdn.inc42.com/wp-content/uploads/2017/09/vogo-scooter-rental-seed-funding.jpg?fit=1000%2C700&ssl=1&resize=1280%2C720" class="d-block w-100" alt="Step1" height="500" width="300"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFH1sl49r4p0Ik58sBQZkAvJwHdrF4YJOzsAD6tgLNzjITwwVjg" class="d-block w-100" alt="Step2" height="500" width="300"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src="https://vogo.in///wp-content/themes/vogoClassic/assets/step-3.png" class="d-block w-100" alt="Step3" height="500" width="300"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>One way trip:</h3>
                            <p>Going somewhere? Just rent our scooters and reach there in no time</p>
                            <br/><br/>
                            <h3>Round trip:</h3>
                            <p>Are you taking the same route to and from? Now you don't need to book twice. Rent our scooters using the round trip option.</p>
                            <br/><br/>
                            <h3>Start your ride again.</h3>
                            <p>Your scooter is where you left it, get on it again.</p>
                        </div>
                    </div>
                    <div className="about">
                        <h1 className="py-3 font-style">Start riding at 4/km*</h1>
                        <div className="d-flex">
                            <h4 style={{marginLeft:"300px"}}>1 Million plus RIDERS</h4>
                            <h4 className="mx-5">5 Million plus RIDEs</h4>
                            <h4 className="mx-5">30 Million plus KM TRAVELLED</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}