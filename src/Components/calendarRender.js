// Rendering calendar
function CalendarRender({ weekdays, organizedSchedule, removeProductFromSchedule }) {
    return (
        <div className="calendar">
            {weekdays.map((day) => (
                <div key={day} className="flex-day">
                    <h3>{day}'s Skincare:</h3>
                    <div className="day-products">
                        {organizedSchedule[day] ? (
                            <ul>
                                {organizedSchedule[day].map((product, index) => (
                                    <li key={index}>{product}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="btn-clear">No planned products.</p>
                        )}
                    </div>
                    {organizedSchedule[day] && (
                        <button onClick={() => removeProductFromSchedule(day)}>
                            Clear {day}
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default CalendarRender;