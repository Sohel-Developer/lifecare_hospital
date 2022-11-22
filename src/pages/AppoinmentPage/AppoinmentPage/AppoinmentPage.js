import React, { useState } from 'react';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AppoinmentOptions from '../AppoinmentOptions/AppoinmentOptions';

const AppoinmentPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppoinmentHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <AppoinmentOptions selectedDate={selectedDate} />
        </div>
    );
};

export default AppoinmentPage;