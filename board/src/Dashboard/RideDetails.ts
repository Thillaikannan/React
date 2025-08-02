// RideDetails.ts
export interface RideDetails {
  userId: string;
  pickup: string;
  drop: string;
  vehicleType: string;
  paymentMethod: string;
  scheduledTime: string; // ISO datetime string
}

export {};