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
            <h1>Available Rides</h1>
            <table>
                <thead>
                    <tr>
                        <th>Destination</th>
                    </tr>
                </thead>
                <tbody>
                    {rides.map(ride => (
                        <tr key={ride.id}>
                            <td>
                                <Link to={`/ride-details/${ride.id}`}>{ride.destination}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Answers;
