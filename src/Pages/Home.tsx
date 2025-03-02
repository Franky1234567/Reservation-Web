'use client'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "@/Components/Button"
import { Reservation } from "@/Types/Reservation" 
import ReservationList from "@/Components/Reservationlist"
import InputNewData from "@/Pages/InputNewData"
import { RootState } from "@/Redux/Store"
import { addReservation, updateReservationStatus } from "@/Redux/reservationSlice"
import { ReservationStatus } from '@/Types/Reservation';

const Beranda = () => {
    const reservations = useSelector((state: RootState) => state.reservations)
    const dispatch = useDispatch()
    
    const updateStatus = (id: string, status: ReservationStatus) => {
        dispatch(updateReservationStatus({ id, status }))
    }

    const [showForm, setShowForm] = useState(false)
    const [newReservation, setNewReservation] = useState<Reservation>({
        id: '', 
        name: '', 
        guestName: '',
        roomType: 'Standard',
        roomNumber: '',
        checkIn: '',
        checkOut: '',
        status: ReservationStatus.CONFIRMED
    })

    const handleAddReservationClick = () => {
        setShowForm(true)
    }

    const handleCloseForm = () => {
        setShowForm(false)
    }

    const handleSaveReservation = () => {
        if (!newReservation.roomType || !newReservation.roomNumber || !newReservation.checkIn || !newReservation.checkOut || !newReservation.guestName) {
            alert("Tolong Isi Semua Data.");
            return;
        }

        const newId = `id-${Math.random().toString(36).substr(2, 9)}`;
        dispatch(addReservation({
            ...newReservation,
            id: newId
        }));
        setShowForm(false); 
        setNewReservation({
            id: '', 
            name: '', 
            guestName: '',
            roomType: 'Standard',
            roomNumber: '',
            checkIn: '',
            checkOut: '',
            status: ReservationStatus.CONFIRMED,
        })
    }

    return (
        <>
            <div className="max-w-3xl mx-auto p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Reservation List</h1>
                    <Button text="Add Reservation" onClick={handleAddReservationClick} />
                </div>

                {showForm && (
                    <div className="border p-4 rounded mb-4">
                        <InputNewData 
                            reservation={newReservation} 
                            setReservation={setNewReservation}
                        />
                        <button 
                            onClick={handleCloseForm} 
                            className="bg-red-500 text-white p-2 rounded m-2"
                        >
                            Close
                        </button>
                        <button 
                            onClick={handleSaveReservation} 
                            className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
                        >
                            Save
                        </button>
                    </div>
                )}

                <ReservationList 
                    reservations={reservations}
                    updateStatus={updateStatus}
                />
            </div>
        </>
    )
}

export default Beranda
