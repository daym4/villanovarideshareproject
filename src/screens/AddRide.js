import React, { useState } from 'react';
import { db } from "../firebase.js";

const AddRide = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sub = (e) => {
        e.preventDefault();
        setIsSubmitting(true); 

        const elementsArray = [...e.target.elements];
        const formData = elementsArray.reduce((accumulator, currentVal) => {
            if (currentVal.id) {
                accumulator[currentVal.id] = currentVal.value;
            }
            return accumulator;
        }, {});

        db.collection("rides")
            .where("fullName", "==", formData.fullName)
            .where("date", "==", formData.date)
            .where("time", "==", formData.time)
            .where("destination", "==", formData.destination)
            .get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    alert("A ride with these details already exists!");
                    setIsSubmitting(false);
                } else {
                    db.collection("rides").add(formData)
                        .then(() => {
                            alert('New ride added successfully!');
                            e.target.reset();
                        })
                        .catch((error) => {
                            alert('Error adding ride: ', error.message);
                        })
                        .finally(() => {
                            setIsSubmitting(false);
                        });
                }
            })
            .catch((error) => {
                alert('Error checking for existing ride: ', error.message);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="container">
            <h1>Add a New Ride</h1>
            <form onSubmit={sub}>
                <input type="text" id="fullName" placeholder="Your full name" required />
                <br /><br />
                <input type="text" id="date" placeholder="Enter ride date as : ##/##/####" required />
                <br /><br />
                <input type="text" id="time" placeholder="Ride time" required />
                <br /><br />
                <input type="text" id="destination" placeholder="Ride destination" required />
                <br /><br />
                <input type="email" id="email" placeholder="Your email" required />
                <br /><br />
                <input type="text" id="rideType" placeholder="Enter: your car or uber" required />
                <br /><br />
                <input type="number" id="seatsAvailable" placeholder="Number of seats available" required />
                <br /><br />
                <input type="text" id="cost" placeholder="Anticipated total cost of gas/uber to split" required />       
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
        </div>
    );
};

export default AddRide;
