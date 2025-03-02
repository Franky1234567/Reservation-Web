import { ChangeEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Reservation as ReservationType } from "@/Types/Reservation"; 

const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`; 
}

interface InputNewDataProps {
    reservation: ReservationType; 
    setReservation: React.Dispatch<React.SetStateAction<ReservationType>>; 
}

const InputNewData: React.FC<InputNewDataProps> = ({ reservation, setReservation }) => {

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setReservation((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDateChange = (date: Date | null, field: keyof ReservationType) => {
        if (date) {
            const formattedDate = formatDate(date); 
            setReservation((prev) => ({
                ...prev,
                [field]: formattedDate
            }));
        } else {
            setReservation((prev) => ({
                ...prev,
                [field]: ""
            }));
        }
    };

    const isValidDate = (date: string) => {
        const parsedDate = new Date(date);
        return parsedDate instanceof Date && !isNaN(parsedDate.getTime());
    };

    return (
        <main className="">
            <h1 className="mb-5 font-bold text-xl">New Reservation</h1>
            <div className="border border-gray-300 rounded p-5">
                <h1 className="font-bold mb-3 text-xl flex items-center gap-2">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="24" height="24" 
                        color="#000000" 
                        fill="none">
                        <path d="M22 17.5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        Room Information
                    </h1>
                <label htmlFor="roomType" className="block mb-2">Room Type</label>
                <select 
                    name="roomType"
                    value={reservation.roomType}
                    onChange={handleInputChange}
                    className="p-2 border-0 bg-blue-100 rounded w-full mb-2"
                >
                    <option value="">Select Room Type</option>
                    <option value="Standard">Standard</option>
                    <option value="Family">Family</option>
                </select>

                
                <label htmlFor="roomNumber" className="block mb-2">Room Number</label>
                <input 
                    type="text"
                    name="roomNumber"
                    value={reservation.roomNumber}
                    onChange={handleInputChange}
                    className="p-2 border-0 bg-blue-100 rounded w-full mb-2"
                    placeholder="Enter room number"
                />

                
                <label htmlFor="checkIn" className="block mb-2">Check-in Date</label>
                <div tabIndex={0}>
                    <DatePicker
                        selected={isValidDate(reservation.checkIn) ? new Date(reservation.checkIn) : null}  
                        onChange={(date) => handleDateChange(date, "checkIn")}
                        className="p-2 border-0 bg-blue-100 rounded w-full mb-2"
                        placeholderText="Select check-in date"
                    />
                </div>

                
                <label htmlFor="checkOut" className="block mb-2">Check-out Date</label>
                <div tabIndex={0}>
                    <DatePicker
                        selected={isValidDate(reservation.checkOut) ? new Date(reservation.checkOut) : null}  
                        onChange={(date) => handleDateChange(date, "checkOut")}
                        className="p-2 border-0 bg-blue-100 rounded w-full"
                        placeholderText="Select check-out date"
                    />
                </div>
            </div>

            <div className="mt-5 border p-5 border-gray-400">
                <h1 className="font-bold mb-3 text-xl flex items-center gap-2"> 
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    color="#000000" 
                    fill="none">
                    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" />
                    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" />
                    </svg>
                    Guest Information
                </h1>

                <label htmlFor="guestName" className="block mb-2">Name</label>
                <input 
                    type="text"
                    name="guestName"
                    value={reservation.guestName}
                    onChange={handleInputChange}
                    className="p-2 border-0 bg-blue-100 rounded w-full mb-2"
                    placeholder="Enter guest name"
                />
            </div>
        </main>
    );
}

export default InputNewData;



