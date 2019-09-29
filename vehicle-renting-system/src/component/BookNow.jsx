import React from 'react';
import './Styles.css';
import VehiclesData from './VehiclesData';

export default class BookNow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            day: "----",
            vNo: "----",
            mileage: "----",
            petrol: "----",
            kilometers: 0,
            hours: 0,
            pickup: '----',
            drop: '----',
            vehicleList: [],
            price: 0,
        }
    }
    updateDay = (e) => {
        const newDay = e.target.value;

        this.setState({
            day: newDay
        })
    }

    updateKilometer = (e) => {
        const newKm = e.target.value;
        
        this.setState({
            kilometers: newKm
        })
    }

    updateHour = (e) => {
        const newHour = e.target.value;
        
        this.setState({
            hours: newHour
        })
    }

    updatePickup = (e) => {
        const newPickup = e.target.value;

        this.setState({
            pickup: newPickup
        })
    }

    updateDrop = (e) => {
        const newDrop = e.target.value;

        this.setState({
            drop: newDrop
        })
    }

    handleForm = () => {
        localStorage.setItem('vehicles' , JSON.stringify(VehiclesData));
        if(this.state.day === "weekdays"){
            const estimate = 15 + (4 * this.state.kilometers) + (0.3 * this.state.hours);

            this.setState({
                price: estimate,
                vNo: Math.floor(Math.random() * (+9999 - +1111)) + +1111,
                mileage: Math.floor(Math.random() * (+6000 - +1010)) + +1010,
                petrol: Math.floor(Math.random() * (+7 - +1)) + +1
            })

            if(this.state.petrol == 1) {
                alert('LOW FUEL... BOOK AGAIN...');
            }
        }
        else{
            const estimate = 25 + (6 * this.state.kilometers) + (0.5 * this.state.hours);

            this.setState({
                price: estimate,
                vNo: Math.floor(Math.random() * (+9999 - +1111)) + +1111,
                mileage: Math.floor(Math.random() * (+6000 - +1010)) + +1010,
                petrol: Math.floor(Math.random() * (+7 - +1)) + +1
            })
        }
        
    }
    componentDidMount(){
        const myList = JSON.parse(localStorage.getItem('vehicles'));
        this.setState({
            vehicleList: myList
        })
    }
    render(){
        //console.log(this.state.vehicleList)
        return(
            <div className = "conatiner d-flex mt-5 booking-style">
                <img style={{marginLeft: "10%"}} src="https://www.thelocal.it/userdata/images/article/861b97336fd30fd9ef2a69c9fabb154233843896de997d37082f8e4b35a8ffe3.jpg" alt="See me"/>
                <div className="float-right mr-5 justify-content">
                    <div className="booking text-center">
                        <h3 style={{color:"blue"}}>Book Here</h3>
                      <form style={{marginTop: "30px"}}>
                        <label>
                            Select Day: 
                            <select onChange = {e => this.updateDay(e)}>
                                <option value="weekdays">Weekdays</option>
                                <option value="weekend">Weekend</option>
                            </select>
                        </label>
                        <label>
                            How many Kilometers:
                            <input type="number" value = {this.state.kilometers} onChange = {e => this.updateKilometer(e)} />
                        </label>
                        <label>
                            How many Hours:
                            <input type="number" value = {this.state.hours} onChange = {e => this.updateHour(e)} />
                        </label>
                        <label>
                            Pickup Location: 
                            <br/>
                            <select onChange = {e => this.updatePickup(e)}>
                                <option value="indiranagar">Indiranagar</option>
                                <option value="kormangala">Kormangala</option>
                                <option value="hubli">Hubli</option>
                                <option value="e-city">E-city</option>
                                <option value="marathahalli">Marathahalli</option>
                                <option value="jayanagar">Jayanagar</option>
                            </select>
                        </label>
                        <br/>
                        <label>
                            Drop Location: 
                            <br/>
                            <select onChange = {e => this.updateDrop(e)}>
                                <option value="indiranagar">Indiranagar</option>
                                <option value="kormangala">Kormangala</option>
                                <option value="hubli">Hubli</option>
                                <option value="e-city">E-city</option>
                                <option value="marathahalli">Marathahalli</option>
                                <option value="jayanagar">Jayanagar</option>
                            </select>
                        </label>
                      </form>
                      <button onClick = {() => this.handleForm()}>BOOK NOW</button>
                    </div>
                </div>
                <div className="booking text-center">
                    <h3 style={{color:"blue"}}>Invoice</h3>
                    <p>Vehcile No: {"KA " + (Math.floor(Math.random() * (+66 - +1)) + +1) + " DI " + this.state.vNo}</p>
                    <p>Mileage: {this.state.mileage}</p>
                    <p>Petrol: {this.state.petrol}</p>
                    <p>Location: {this.state.pickup.toUpperCase()}</p>
                    <p>Day: {this.state.day.toUpperCase()}</p>
                    <p>Pickup: {this.state.pickup.toUpperCase()}</p>
                    <p>Drop: {this.state.drop.toUpperCase()}</p>
                    <h6>Estimated Price:</h6>
                    <p>{this.state.price}</p>
                </div>
            </div>
        )
    }
}