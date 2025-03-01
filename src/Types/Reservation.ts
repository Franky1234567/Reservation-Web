export enum ReservationStatus {
    CONFIRMED = "CONFIRMED",
    CHECKED_IN = "CHECKED_IN",
    CHECKED_OUT = "CHECKED_OUT"
  }
  
  
export interface Reservation {
  id: string;         
  name: string;       
  guestName: string;  
  roomType: string;   
  roomNumber: string; 
  checkIn: string;    
  checkOut: string;   
  status: ReservationStatus;     
}
