import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase.js';

const Answers = () => {
    const [loading, setLoading]= useState(true);
    const [posts, setPosts]=useState([]);

    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db.collection("rides"). orderBy("date").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            getPostsFromFirebase.push({
                ...doc.data(),
                key: doc.id,
            });
        });
        setPosts(getPostsFromFirebase);
        setLoading(false);
    });
// return is clean up function
    return () => subscriber();
}, []);

if (loading) {
    return <h1>loading data from firebase...</h1>;
}
    return (
        <div className="container" >
            {posts.length > 0 ? (
                posts.map((post) => <div key={post.key}>{post.answer}</div>)
            ) : <h1>No rides yet!</h1>}
            
            <center style={{ marginTop: "50px" }}>
                <h1 style={{marginBottom: "25px"}}>Here are the available rides!</h1>
                <h3 style={{marginBottom: "25px"}}>Interested in joining a ride? Email the student to let them know!</h3>
                <h3>***** Go Cats! *****</h3>
            </center>
 
            {posts.map((data) => (
                <Frame fullName={data.fullName}
			        date={data.date}
                    time={data.time}
			        destination={data.destination}
                    email={data.email}
                    rideType={data.rideType}
                    seatsAvailable={data.seatsAvailable}
                    cost={data.cost} />
                ))
            }
        </div>

    );
};
const Frame = ({ fullName, date, time, destination, email, rideType, seatsAvailable, cost }) => {
    return (
        <center>
            <div className="div">
                <p>Student's Name: {fullName}</p>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
                <p>Ride Destination: {destination}</p>
                <p>Student's Email: {email}</p>
                <p>Ride Type: {rideType}</p>
                <p>Seats Available: {seatsAvailable}</p>
                <p>Anticipated Cost of Gas/Uber to Split: {cost}</p>
                <h3>***** Go Cats! *****</h3>
            </div>
        </center>
    );
}

export default Answers;
