import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { RideDetail,setRideData, loadRideDataFromStorage, clearRideData } from './Slice/rideSlice';
import { RideDetails } from './RideDetails';
import { RootState, AppDispatch } from './Store/Store';
import rideDataJson from './rideData.json';
import Swal from 'sweetalert2';

const API_URL = "http://localhost:4001/rides";

const CreateRide: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const rideData = useSelector((state: RootState) => state.ride.rideData);

    useEffect(() =>{
        dispatch(loadRideDataFromStorage());
    }, [dispatch])
    
    const handleCreateRide = async () => {
        try {
            const rideData : RideDetails = rideDataJson as RideDetails;
            const data: RideDetail = rideDataJson;
            const response = await axios.post(API_URL, rideData, {
                headers: {
                    "Content-Type": "application/json"
                },
                // withCredentials: true
            });
            dispatch(setRideData(data));
            console.log("Ride Data:", data);
            console.log(response.data);
            Swal.fire({
            icon: 'success',
            title: 'Ride Created!',
            text: 'Your ride was successfully created.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });

        } catch (error) {
            console.error(error);
            Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong. Please try again.',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
        });
        }
    };

    const handleClearRide =() => {
        dispatch(clearRideData());
        Swal.fire({
            icon: 'info',
            title: 'Ride Data Cleared',
            text: 'Your ride data has been cleared.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });
    }
    return (
        <div>
            <h1>Create Ride</h1>
            <button onClick={handleCreateRide}>Create Ride</button>
            <button onClick={handleClearRide} style={{ marginLeft: 10 }}>
        Clear Ride Data
      </button>
      <h3>Stored Ride Data:</h3>
      <pre>{rideData ? JSON.stringify(rideData, null, 2) : 'No data stored'}</pre>
        </div>
    );
}

export default CreateRide;
