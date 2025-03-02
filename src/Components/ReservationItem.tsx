
import { Reservation, ReservationStatus } from '../Types/Reservation';
import { useState } from 'react';


interface ReservationItemProps {
  reservation: Reservation;
  updateStatus: (id: string, status: ReservationStatus) => void;
}

export default function ReservationItem({
  reservation,
  updateStatus,
}: ReservationItemProps) {
  const [open, setOpen] = useState(false);

  //mendapatkan bg color
  const getBgColor = (status: ReservationStatus) => {
    switch (status) {
      case ReservationStatus.CONFIRMED:
        return 'bg-blue-100';
      case ReservationStatus.CHECKED_IN:
        return 'bg-yellow-100';
      case ReservationStatus.CHECKED_OUT:
        return 'bg-green-100';
      default:
        return 'bg-gray-100';
    }
  };

  // Fungsi untuk mendapatkan warna tombol berdasarkan status
  const getButtonColor = (status: ReservationStatus) => {
    switch (status) {
      case ReservationStatus.CONFIRMED:
        return 'bg-blue-500 hover:bg-blue-600';
      case ReservationStatus.CHECKED_IN:
        return 'bg-yellow-500 hover:bg-yellow-600';
      case ReservationStatus.CHECKED_OUT:
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  // Fungsi untuk mendapatkan label status berdasarkan status reservasi
  const getStatusLabel = (status: ReservationStatus) => {
    switch (status) {
      case ReservationStatus.CONFIRMED:
        return 'CONFIRMED';
      case ReservationStatus.CHECKED_IN:
        return 'CHECKED IN';
      case ReservationStatus.CHECKED_OUT:
        return 'CHECKED OUT';
      default:
        return 'UNKNOWN';
    }
  };

  // Fungsi untuk mengubah status reservasi saat tombol diklik
  // const handleStatusChange = () => {
  //   const currentStatus = reservation.status;
  //   let newStatus: ReservationStatus;

  //   switch (currentStatus) {
  //     case ReservationStatus.CONFIRMED:
  //       newStatus = ReservationStatus.CHECKED_IN;
  //       break;
  //     case ReservationStatus.CHECKED_IN:
  //       newStatus = ReservationStatus.CHECKED_OUT;
  //       break;
  //     case ReservationStatus.CHECKED_OUT:
  //       newStatus = ReservationStatus.CONFIRMED;
  //       break;
  //     default:
  //       newStatus = ReservationStatus.CONFIRMED;
  //   }

  //   updateStatus(reservation.id, newStatus);
  // };
  const handleStatusChange = () => {
    const currentStatus = reservation.status;
    let newStatus: ReservationStatus;
  
    switch (currentStatus) {
      case ReservationStatus.CONFIRMED:
        newStatus = ReservationStatus.CHECKED_IN;
        break;
      case ReservationStatus.CHECKED_IN:
        newStatus = ReservationStatus.CHECKED_OUT;
        break;
      case ReservationStatus.CHECKED_OUT:
        // Tidak bisa kembali ke CONFIRMED setelah CHECKED OUT
        return; // Tidak ada perubahan status
      default:
        newStatus = ReservationStatus.CONFIRMED;
    }
  
    updateStatus(reservation.id, newStatus);
  };
  

  
  const handleOpenDetail = () => {
    setOpen(!open);
  };
  

  
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div onClick={handleOpenDetail} className={`${getBgColor(reservation.status)} p-4 rounded-lg flex justify-between items-center`}>
      <div className='flex justify-between flex-col w-full'>
        <div className='flex justify-between'>
          <h5 className="text-lg font-medium">{reservation.guestName || 'No name'}</h5>
          <span className={`${getButtonColor(reservation.status)} text-white px-4 py-1 rounded-full text-sm font-medium`}>{getStatusLabel(reservation.status)}</span>
        </div>
        {open && (
          <>
            {/* <h3>Type Room : {reservation.roomType}</h3> */}
            <h3 className='flex items-center gap-1 my-1'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'rgb(255, 255, 255)', width: '20px', height: '20px' }}
              
              >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
              </svg>  
              Room Number : {reservation.roomNumber} ({reservation.roomType})</h3>
            <h3 className='flex items-center gap-1 my-1'>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}}>
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Check-In: {formatDate(new Date(reservation.checkIn))} - {formatDate(new Date(reservation.checkOut))}</h3> {/* Menampilkan format check-in */}
            {/* <h3>Check-Out: {formatDate(new Date(reservation.checkOut))}</h3> */}
            <h3 className='flex items-center gap-1 my-1'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" stroke="black" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}}>
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
              Reservasi ID : {reservation.id}</h3>

            <button
              onClick={handleStatusChange}
              className={`${getButtonColor(reservation.status)} text-white px-4 py-1 rounded-full text-sm font-medium`}
            >
              {getStatusLabel(reservation.status)}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
