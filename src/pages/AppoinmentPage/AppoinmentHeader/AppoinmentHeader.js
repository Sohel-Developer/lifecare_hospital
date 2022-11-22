import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
const AppoinmentHeader = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className=" md:py-10 md:my-10">
            <div className="pb-10 flex justify-around ">
                <div className=''>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />

                </div>
                <div className=' w-1/2'>
                    <img src="https://i.ibb.co/0YxFwCQ/chair.png" alt="Appoinment Banner Pictures" />

                </div>

            </div>

        </div>
    );
};

export default AppoinmentHeader;