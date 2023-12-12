import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { Link } from 'react-router-dom';

const Answers = () => {
    const [loading, setLoading] = useState(true);
    const [rides, setRides] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("rides").orderBy("date").onSnapshot((querySnapshot) => {
            const ridesData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setRides(ridesData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <h1>Loading data from Firebase...</h1>;
    }

    return (
        <div className="container">
            <h1>Currently Available Rides For Sign-Ups:</h1>
            <div className="rides-list">
                {rides.map(ride => (
                    <div key={ride.id} className="ride-frame">
                        <Link to={`/ride-details/${ride.id}`}>
                            <div className="ride-destination">{ride.destination}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Answers;
