
import { ChangeEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Reservation as ReservationType } from "@/Types/Reservation"; 


const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
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
        return !isNaN(parsedDate.getTime());
    };

    return (
        <main className="">
            <h1 className="mb-5 font-bold text-xl">New Reservation</h1>
            <div className="border border-gray-300 rounded p-5">
                
                <label htmlFor="roomType" className="block mb-2">Room Type</label>
                <select 
                    name="roomType"
                    value={reservation.roomType}
                    onChange={handleInputChange}
                    className="p-2 border-0 bg-blue-100 rounded w-full mb-2 "
                >
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
                <DatePicker
                    selected={isValidDate(reservation.checkIn) ? new Date(reservation.checkIn) : null}  
                    onChange={(date) => handleDateChange(date, "checkIn")}
                    className="p-2 border-0 bg-blue-100 rounded w-full mb-2"
                    placeholderText="Select check-in date"
                />

                
                <label htmlFor="checkOut" className="block mb-2">Check-out Date</label>
                <DatePicker
                    selected={isValidDate(reservation.checkOut) ? new Date(reservation.checkOut) : null}  
                    onChange={(date) => handleDateChange(date, "checkOut")}
                    className="p-2 border-0 bg-blue-100 rounded w-full"
                    placeholderText="Select check-out date"
                />
            </div>

            <div className="mt-5 border p-5 border-gray-400">
                <h1 className="font-bold mb-3 text-xl flex items-center gap-2"> 
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
                        style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px',}}
                    >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Guest Information
                </h1>

                {/* Guest Name */}
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


