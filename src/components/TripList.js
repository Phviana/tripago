import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import "./TripList.css";


export function TripList() {
    const [url, setUrl] = useState("/trips");

    const { data: trips, isPending, error } = useFetch(url, { type: "GET" });

    return (
        <div className="trip-list">
            <h2>Trip List</h2>
            {isPending && <div>...Loading Trips</div>}
            {error && <div>{error}</div>}
            <ul>
                {trips && trips.map((trip) => (

                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                )
                )}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl("/trips?loc=europe")}>
                    European Trips
                </button>
                <button onClick={() => setUrl("/trips")}>
                    All Trips
                </button>
            </div>
        </div>
    )
}
