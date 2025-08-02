import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface RideDetail {
    userId: string,
    pickup: string;
    drop: string;
    vehicleType: string;
    paymentMethod: string;
    scheduledTime: string;
}

interface RideState {
    rideData : RideDetail | null;
}

const initialState: RideState ={
    rideData: null
}

const rideSlice= createSlice({
    name: 'ride',
    initialState,
    reducers: {
        setRideData: (state, action: PayloadAction<RideDetail>) => {
            state.rideData = action.payload;
            localStorage.setItem('rideData', JSON.stringify(action.payload));
        },
    loadRideDataFromStorage : (state) => {
        const storedData = localStorage.getItem('rideData');
        if(storedData){
            state.rideData = JSON.parse(storedData);
        }
    },
    clearRideData :(state)=>{
        state.rideData = null;
        localStorage.removeItem('rideData');
    }
    }

});

export const {setRideData, loadRideDataFromStorage, clearRideData} = rideSlice.actions;
export default rideSlice.reducer;