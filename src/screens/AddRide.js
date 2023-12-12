import { db } from "../firebase.js";
import React from 'react';

const AddRide = () => {

    const sub = (e) => {
        e.preventDefault();

        const elementsArray = [...e.target.elements];

        const formData = elementsArray.reduce((accumulator, currentVal) => {
            if (currentVal.id) {
                accumulator[currentVal.id] = currentVal.value;
            }
            return accumulator;
        }, {});

        db.collection("rides").add(formData)
            .then(() => {
                alert('New ride added successfully!');
                e.target.reset();
            })
            .catch((error) => {
                alert('Error adding ride: ', error.message);
            });
    };

    return (
        <div className="container">
            <h1>Add a New Ride</h1>
            <form onSubmit={sub}>
                <input type="text" id="fullName" placeholder="Your full name"></input>
                <br /><br />
                <input type="text" id="date" placeholder="Enter ride date as : ##/##/####" ></input> 
                <br /><br />
                <input type="text" id="time" placeholder="Ride time"></input>
                <br /><br />
                <input type="text" id="destination" placeholder="Ride destination"></input>
                <br /><br />
                <input type="text" id="email" placeholder="Your email"></input>
                <br /><br />
                <input type="text" id="rideType" placeholder="Enter: your car or uber"></input>
                <br /><br />
                <input type="text" id="seatsAvailable" placeholder="Number of seats available"></input>
                <br /><br />
                <input type="text" id="cost" placeholder="Anticipated total cost of gas/uber to split"></input>       
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddRide;
