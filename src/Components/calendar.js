import React from "react";
import { useState } from "react";
import CalendarRender from "./calendarRender";

function Calendar (props) {
    const [selectedSkinType, setSelectedSkinType] = useState("");
  
    // skin types
    const options = [
        { id: "oily", label: "Oily Skin" },
        { id: "dry", label: "Dry Skin" },
        { id: "combination", label: "Combination" },
    ];

    // handles skin type options
    const handleOptionSelect = (optionId) => {
        setSelectedSkinType(optionId);
    };

    // helper for rendering options
    const renderOptions = (options, valueKey, labelKey) => (
        options.map((option) => (
            <div key={option[valueKey]}>
                <label>
                    <input
                        type="radio"
                        name="skinType"
                        value={option[valueKey]}
                        checked={selectedSkinType === option[valueKey]}
                        onChange={() => handleOptionSelect(option[valueKey])}
                    />
                    {option[labelKey]}
                </label>
            </div>
        ))
    );

    const [skincareProducts, setSkincareProducts] = useState([]);
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");
    
    // adds products
    const addProductToSchedule = () => {
        if (selectedProduct && selectedDay) {
            setSkincareProducts((prevProducts) => [
                ...prevProducts,
                { day: selectedDay, product: selectedProduct },
            ]);
            setSelectedProduct("");
        }
    };
    
    const removeProductFromSchedule = (day) => {
        setSkincareProducts(skincareProducts.filter((item) => item.day !== day));
    };

    const organizedSchedule = {};
    skincareProducts.forEach((item) => {
        if (!organizedSchedule[item.day]) {
            organizedSchedule[item.day] = [];
        }
        organizedSchedule[item.day].push(item.product);
    });

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // helper for rendering days
    const renderDaysOptions = () => (
        <>
            <option value="" disabled>Select a day</option>
            {weekdays.map((day) => (
                <option key={day} value={day}>
                    {day}
                </option>
            ))}
        </>
    );

    // renders options for products
    const renderProductOptions = () => (
        <>
            <option value="" disabled>Select a product</option>
            {[
                'Cetaphil Gentle Skin Facial Cleanser', 
                'Vanicream Facial Cleanser', 
                'Humanist Beauty Herban Wisdom Facial Oil', 
                'Rice Serum', 
                'Abib Heartleaf Essence',
                'Olay Regenerist Moisturizer', 
                'Drunk Elephant Borra Barrier Repair Cream', 
                'Bubble Cloud Surf Moisturizer', 
                'Blind Beauty Micerodermabrasion Scrub', 
                'Dove Deep Moisture Body Wash'
            ].map((product) => (
                <option key={product} value={product}>
                    {product}
                </option>
            ))}
        </>
    );

    return (
        <div>
            <main>
                {/* multiple choice */}
                <div className="multiple-container">
                    <h2>What Kind of Skin do You Have?</h2>
                    <p>Select one option:</p>
                    {renderOptions(options, "id", "label")}
                    <p>You selected: {selectedSkinType}</p>
                </div>
                <div className="schedule-maker-container">
                    <h2>Schedule Maker</h2>
                    {/* dropdown for days */}
                    <div className="flexbox-container">
                    <label htmlFor="daySelect">Select Day:</label>
                        <select id="daySelect" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                            {renderDaysOptions()}
                        </select>
                    </div>
                    {/* dropdown to select skincare product */}
                    <div className="flexbox-container">
                        <label htmlFor="productSelect">
                            Select Skincare Product:
                            <select id="productSelect" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                                {renderProductOptions()}
                            </select>
                        </label>
                    </div>
                    {/* add selected product to schedule */}
                    <button onClick={addProductToSchedule}>Add to Schedule</button>

                    {/* calendar format */}
                    <CalendarRender
                        weekdays={weekdays}
                        organizedSchedule={organizedSchedule}
                        removeProductFromSchedule={removeProductFromSchedule}
                        {...props}
                    />
                </div>
            </main>
        </div>
    );
}

export default Calendar;