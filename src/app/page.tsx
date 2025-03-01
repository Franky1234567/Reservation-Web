
import Berdanda from "@/Pages/Home"; 

export default function Home() {
  return (
    <div>
      <Berdanda />  
    </div>
  );
}
// src/app/page.tsx
// 'use client'
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/Redux/Store";  // Import the correct RootState type
// import { updateReservationStatus } from "@/Redux/reservationSlice";  // Import the update action
// import Berdanda from "@/Pages/Home";
// const Page = () => {
//   // const reservations = useSelector((state: RootState) => state.reservations);  // Access reservations state from Redux
//   // const dispatch = useDispatch();

//   // const updateStatus = (id: string, status: string) => {
//   //   dispatch(updateReservationStatus({ id, status }));
//   // };

//   return (
//     <div>
//       <Berdanda />
//       <h1>Reservation List</h1>

//       {/* Render your reservations list */}
//       {/* <ul>
//         {reservations.map((reservation) => (
//           <li key={reservation.id}>
//             {reservation.guestName} - {reservation.status}
//             <button onClick={() => updateStatus(reservation.id, "Confirmed")}>Confirm</button>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default Page;
