

import { Reservation, ReservationStatus } from '../Types/Reservation';
import { useState, useRef, useEffect } from 'react';

interface ReservationItemProps {
  reservation: Reservation;
  updateStatus: (id: string, status: ReservationStatus) => void;
}

export default function ReservationItem({
  reservation,
  updateStatus,
}: ReservationItemProps) {
  const [open, setOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && 
          !dropdownRef.current.contains(event.target as Node)) {
        setStatusDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


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

  const getDropdownColor = (status: ReservationStatus) => {
    switch (status) {
      case ReservationStatus.CONFIRMED:
        return 'bg-blue-100 text-blue-800';
      case ReservationStatus.CHECKED_IN:
        return 'bg-yellow-100 text-yellow-800';
      case ReservationStatus.CHECKED_OUT:
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };


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

  const handleStatusChange = (newStatus: ReservationStatus) => {
    updateStatus(reservation.id, newStatus);
    setStatusDropdownOpen(false);
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

  const getStatusOptions = (currentStatus: ReservationStatus) => {
    switch (currentStatus) {
      case ReservationStatus.CONFIRMED:
        return [
          { label: 'CHECK IN', value: ReservationStatus.CHECKED_IN }
        ];
      case ReservationStatus.CHECKED_IN:
        return [
          { label: 'CONFIRMED', value: ReservationStatus.CONFIRMED },
          { label: 'CHECK OUT', value: ReservationStatus.CHECKED_OUT }
        ];
      case ReservationStatus.CHECKED_OUT:
        return []; // Tidak ada opsi untuk status CHECK OUT
      default:
        return [];
    }
  };

  return (
    <div className={`${getBgColor(reservation.status)} p-4 rounded-lg flex justify-between items-center`}>
      <div className='flex justify-between flex-col w-full'>
        <div onClick={handleOpenDetail} className='flex justify-between'>
          <h5 className="text-lg font-medium" >{reservation.guestName || 'No name'}</h5>
          <span className={`${getButtonColor(reservation.status)} text-white px-4 py-1 rounded-full text-sm font-medium`}>{getStatusLabel(reservation.status)}</span>
        </div>

        {open && (
          <>
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
              Check-In: {formatDate(new Date(reservation.checkIn))} - {formatDate(new Date(reservation.checkOut))}</h3>
            <h3 className='flex items-center gap-1 mt-1 mb-3'>
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
              <div className="relative" ref={dropdownRef}>
              {!open && reservation.status === ReservationStatus.CONFIRMED && (
                <div className="bg-white rounded-md px-4 py-2 text-center mb-1 shadow-sm">
                  <span className="text-gray-800 font-medium">Check in</span>
                </div>
              )}
              <div
                className={`${getDropdownColor(reservation.status)} rounded-md px-4 py-2 flex items-center justify-start cursor-pointer ${reservation.status === ReservationStatus.CHECKED_OUT ? 'cursor-default' : ''}`}
                onClick={() => reservation.status !== ReservationStatus.CHECKED_OUT && setStatusDropdownOpen(!statusDropdownOpen)}
              >
                <span className="font-medium border-b-2">{getStatusLabel(reservation.status)}</span>
                {reservation.status !== ReservationStatus.CHECKED_OUT && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-5 w-5 ml-1">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </div>
              {statusDropdownOpen && getStatusOptions(reservation.status).length > 0 && (
                <div className="absolute  bottom-full mb-1 bg-white rounded-md shadow-md p-2 border border-gray-200 z-10 w-32 ml-4">
                  {getStatusOptions(reservation.status).map((option) => (
                    <div 
                      key={option.value}
                      className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                      onClick={() => handleStatusChange(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}