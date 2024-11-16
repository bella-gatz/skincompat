import React, { useState, useEffect, useMemo} from 'react';
// import {getDatabase, ref} from 'firebase/database';
import './style.css';

function Accessibility(props) {
    
    // const db = getDatabase(); 
    // const nameRef = ref(db, 'product/name');

    // State to keep track of selected checkboxes
    const imageMap = useMemo(() => {
        return {
            'Cetaphil Gentle Skin Facial Cleanser': '/img/cetaphil-cleanser2.jpg',
            'Vanicream Facial Cleanser': '/img/vanicream-cleanser2.jpg',
            'Humanist Beauty Herban Wisdom Facial Oil': '/img/humanist-beauty.jpg',
            'Olay Regenerist Moisturizer': '/img/skincare-product-1.jpg',
            'Blind Beauty Micerodermabrasion Scrub': '/img/blind-beauty (1).jpg',
            'Drunk Elephant Borra Barrier Repair Cream': '/img/drunkelephant.jpg',
            'Bubble Cloud Surf Moisturizer': '/img/bubble.jpg',
            'Rice Serum': '/img/riceserum.jpg',
            'Dove Deep Moisture Body Wash': '/img/dovebodywash.jpg',
            'Abib Heartleaf Essence': '/img/abib.webp',
        };
    }, []);

    const [selectedCheckboxes, setSelectedCheckboxes] = useState({
        cleanser: false,
        serum: false,
        moisturizer: false,
        bodyWash: false,
        pumpBottles: false,
        braille: false,
        enhancedGripLid: false,
        pushLid: false,
    });

    // State to store the unique products
    const [uniqueProducts, setUniqueProducts] = useState(new Set());

    // Define products for each category
    const products = useMemo(() => {
        return {
            cleanser: ['Cetaphil Gentle Skin Facial Cleanser', 'Vanicream Facial Cleanser'],
            serum: ['Humanist Beauty Herban Wisdom Facial Oil','Rice Serum','Abib Heartleaf Essence'],
            moisturizer: ['Olay Regenerist Moisturizer', 'Drunk Elephant Borra Barrier Repair Cream','Bubble Cloud Surf Moisturizer'],
            bodyWash: ['Blind Beauty Micerodermabrasion Scrub', 'Dove Deep Moisture Body Wash'],
            pumpBottles: ['Cetaphil Gentle Skin Facial Cleanser', 'Vanicream Facial Cleanser','Rice Serum', 'Dove Deep Moisture Body Wash','Abib Heartleaf Essence'],
            braille: ['Blind Beauty Micerodermabrasion Scrub', 'Olay Regenerist Moisturizer','Humanist Beauty Herban Wisdom Facial Oil'],
            enhancedGripLid: ['Olay Regenerist Moisturizer'],
            pushLid: ['Drunk Elephant Borra Barrier Repair Cream', 'Bubble Cloud Surf Moisturizer'],
        };
    }, []);

    // Function to handle checkbox change
    const handleCheckboxChange = (checkboxName) => {
        setSelectedCheckboxes({
            ...selectedCheckboxes,
            [checkboxName]: !selectedCheckboxes[checkboxName],
        });
    };

    const generateCheckboxes = (category) => (
        <label key={category} className="container">
            <input
                type="checkbox"
                checked={selectedCheckboxes[category]}
                onChange={() => handleCheckboxChange(category)}
            />
            <span className="checkbox"></span>{category.charAt(0).toUpperCase() + category.slice(1)}
        </label>
    );

    const generateProductItems = (product) => (
        <div key={product} className="flex-item">
            <img src={imageMap[product]} alt={product} />
            <p>{product}</p>
        </div>
    );

    const categoryCheckboxes = ['cleanser', 'serum', 'moisturizer', 'bodyWash'].map(category => generateCheckboxes(category));
 
    const packagingCheckboxes = ['pumpBottles', 'braille', 'enhancedGripLid', 'pushLid'].map(category => generateCheckboxes(category));

    const productItems = [...uniqueProducts].map(product => generateProductItems(product));

    // Effect to update unique products when checkboxes change
    useEffect(() => {
        const updatedProducts = new Set();
    
        // checks if any of the checkboxes are selected
        const anyCheckboxSelected = Object.values(selectedCheckboxes).some(value => value);
    
        if (anyCheckboxSelected) {
            Object.keys(imageMap).forEach(product => {
                let isValidProduct = true;
                    Object.keys(selectedCheckboxes).forEach(category => {
                    if (selectedCheckboxes[category] && !products[category].includes(product)) {
                        isValidProduct = false;
                    }
                });
    
                if (isValidProduct) {
                    updatedProducts.add(product);
                }
            });
        }
    
        setUniqueProducts(updatedProducts);
    }, [selectedCheckboxes, products, imageMap]);

    return (
        <div className="accessibility">
            <main>
                <header>
                    <div className="title">
                        <h2>Accessible Packaging</h2>
                    </div>
                    {/* <div className={`topnav ${isMenuOpen ? 'responsive' : ''}`}>
                        <Link to="/">Home</Link>
                        <Link to="/calendar">Skincare Calendar</Link>
                        <Link to="/compatibility">Product Compatibility</Link>
                        <Link to="/accessibility">Accessibility</Link>
                        <Link to="/about-us">About Us</Link>
                        {/* Hamburger menu */}
                        {/* <button className="icon" onClick={toggleMenu}>
                            <i className="fa fa-bars"></i>
                        </button> */}
                    {/* </div> */}
                </header>
                <div className="description-text"> 
                        Accessible packaging in skincare and makeup products is essential for ensuring inclusivity and usability for all consumers.
                        <p> By designing packaging that is easy to open, handle, and dispense product from, brands can cater to individuals with a range of abilities, including those with limited dexterity, mobility challenges, or visual impairments. </p>
                        <p> Accessible packaging promotes independence and dignity, allowing everyone to enjoy and benefit from the products without unnecessary frustration or barriers.</p>
                        <p> Use our tool to discover products with accessible packaging that meets your needs. </p>
                    </div>
                <div className="flex-container">
                    <section>
                        <h2>Select Product type:</h2>
                        <div className="checkbox-container">
                            {categoryCheckboxes}
                        </div>
                        <h2>Select Packaging:</h2>
                        <div className="checkbox-container">
                            {packagingCheckboxes}
                        </div>
                    </section>
                    <section>
                        <div className="product-container">
                            {productItems}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Accessibility;