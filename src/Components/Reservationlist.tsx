// import { Reservation, ReservationStatus } from '../Types/Reservation';
// import ReservationItem from './ReservationItem';
// // import { useSelector } from 'react-redux';
// // import { RootState } from "@/Redux/Store"
// interface ReservationListProps {
//   reservations: Reservation[];
//   updateStatus: (id: string, status: ReservationStatus) => void;
// }

// export default function ReservationList({ 
  
//   reservations, 
//   updateStatus 
// }: ReservationListProps) {
//   // const dataReservation = useSelector((state: RootState) => state.reservations)
//   return (
//     <div className="space-y-3">
//       {reservations.map(reservation => (
//         <ReservationItem 
//           key={reservation.id} 
//           reservation={reservation} 
//           updateStatus={updateStatus} 
//         />
//       ))}
//     </div>
//   );
// }
// src/components/ReservationList.tsx
import {  ReservationStatus,Reservation } from '../Types/Reservation';
import ReservationItem from './ReservationItem';
import { useSelector } from 'react-redux';
import { RootState } from "@/Redux/Store"

interface ReservationListProps {
  updateStatus: (id: string, status: ReservationStatus) => void;
  reservations: Reservation[];
}

export default function ReservationList({ updateStatus }: ReservationListProps) {
  const dataReservation = useSelector((state: RootState) => state.reservations);  

  console.log(dataReservation);  

  return (
    <div className="space-y-3">
      {dataReservation.map((reservation) => (
        <ReservationItem
          key={reservation.id}
          reservation={reservation}
          updateStatus={updateStatus}
        />
      ))}
    </div>
  );
}
