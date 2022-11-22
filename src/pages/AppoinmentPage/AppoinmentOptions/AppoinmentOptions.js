import { format } from 'date-fns';
import React from 'react';

const AppoinmentOptions = ({ selectedDate }) => {
    return (
        <div>
            <p className='text-center text-secondary text-xl font-bold '>Date Selected {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AppoinmentOptions;