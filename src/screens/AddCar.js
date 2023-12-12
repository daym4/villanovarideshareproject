import React, { useState } from 'react';
import { db } from "../firebase.js";

const AddCar = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitCar = (e) => {
        e.preventDefault();
        setIsSubmitting(true); 

        const elementsArray = [...e.target.elements];
        const formData = elementsArray.reduce((accumulator, currentElement) => {
            if (currentElement.id) {
                accumulator[currentElement.id] = currentElement.value;
            }
            return accumulator;
        }, {});

        db.collection("cars")
            .where("make", "==", formData.make)
            .where("model", "==", formData.model)
            .where("year", "==", formData.year)
            .get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    alert("A car with these details already exists!");
                    setIsSubmitting(false);
                } else {
                    db.collection("cars").add(formData)
                        .then(() => {
                            alert('New car added successfully!');
                            e.target.reset();
                        })
                        .catch((error) => {
                            alert('Error adding car: ', error.message);
                        })
                        .finally(() => {
                            setIsSubmitting(false);
                        });
                }
            })
            .catch((error) => {
                alert('Error checking for existing car: ', error.message);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="container">
            <h1>Add a New Car</h1>
            <form onSubmit={submitCar}>
                <input type="text" id="make" placeholder="Car Make" required />
                <br /><br />
                <input type="text" id="model" placeholder="Car Model" required />
                <br /><br />
                <input type="text" id="year" placeholder="Year of Manufacture" required />
                <br /><br />
                <input type="text" id="color" placeholder="Car Color" required />
                <br /><br />
                <input type="number" id="mileage" placeholder="Car Mileage" required />
                <br /><br />
                <input type="text" id="licensePlate" placeholder="License Plate Number" required />
                <br /><br />
                <input type="text" id="vin" placeholder="Vehicle Identification Number (VIN)" required />
                <br /><br />
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
        </div>
    );
};

export default AddCar;
