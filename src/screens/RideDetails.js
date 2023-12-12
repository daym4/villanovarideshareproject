import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const RideDetails = () => {
    const [ride, setRide] = useState(null);
    const { rideId } = useParams();

    useEffect(() => {
        db.collection("rides").doc(rideId).get().then(doc => {
            if (doc.exists) {
                setRide(doc.data());
            } else {
            }
        });
    }, [rideId]);

    if (!ride) {
        return <h1>Loading ride details...</h1>;
    }

    return (
        <div className="ride-details">
            <h1>Ride Details</h1>
            <p>Student's Name: {ride.fullName}</p>
            <p>Date: {ride.date}</p>
            <p>Time: {ride.time}</p>
            <p>Ride Destination: {ride.destination}</p>
            <p>Student's Email: <a href={`mailto:${ride.email}`}> {ride.email}</a></p> 
            <p>Ride Type: {ride.rideType}</p>
            <p>Seats Available: {ride.seatsAvailable}</p>
            <p>Anticipated Cost: {ride.cost}</p>
        </div>
    );
};

export default RideDetails;
