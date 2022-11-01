import "../Calender.css";
import React, {useState} from 'react';
import "react-calendar/dist/Calendar.css"
import ReactDom from "react-dom";
import Calendar from "react-calendar";

function CalendarAppProfessional() {

    const allMonthValues = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];


    const [selectedDate, setSelectedDate] = useState();
    const [calendarText, setCalendarText] = useState('No Date is selected');

    //Function to update selected date and calender text
    const handleDateChange = (value) => {
        setSelectedDate(value);
        setCalendarText(`The selected Date is ${value.toDateString()}`);
    };

    //Function to handle selected year change
    const handleYearChange = (value) => {
        const yearValue = value.getFullYear();
        setCalendarText(`${yearValue} Year is selected`);
    }

    const handleMonthChange = (value) => {
        const monthValue = allMonthValues[value.getMonth()];
        setCalendarText(`${monthValue} Month is selected`);
    };

    return (
        <div className = "calendar">
            <h2 className = "calender-details"> {calendarText}</h2>
            <Calendar
                onClickMonth = {handleMonthChange}
                onClickYear = {handleYearChange}
                onChange = {handleDateChange}
                value = {selectedDate}
            />
        </div>
    )



}
export default CalendarAppProfessional