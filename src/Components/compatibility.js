import React, { useState, useEffect, useCallback} from 'react';
// import {getDatabase, ref, get} from 'firebase/database';
import './style.css';
import compatData from "./data/compat.json"
 
function Compat(props) {


    // gets user selection for product a
    const getSelectedValueA = useCallback(() => {
        var dropdown = document.getElementById("form-a");
        var selectedValue = dropdown.options[dropdown.selectedIndex].value;
        return selectedValue;
    }, []);

    // gets user selection for product b
    const getSelectedValueB = useCallback(() => {
        var dropdown = document.getElementById("form-b");
        var selectedValue = dropdown.options[dropdown.selectedIndex].value;
        return selectedValue;
    }, []);
    
    const updateImageA = useCallback(() => {
        const selectedValueA = getSelectedValueA();
        
        // Find the product object based on selectedValueA
        const selectedProduct = compatData[selectedValueA];
        if (selectedProduct) {
            // let img = selectedProduct.imagePath;
            document.getElementById('product-imageA').src = selectedProduct.imagePath;
            document.getElementById('product-imageA').alt = selectedProduct.productName;
        }
    }, [getSelectedValueA]);
    
    const updateImageB = useCallback(() => {
        const selectedValueB = getSelectedValueB();
        
        // Find the product object based on selectedValueB
        const selectedProduct = compatData[selectedValueB];
        if (selectedProduct) {
            document.getElementById('product-imageB').src = selectedProduct.imagePath;
            document.getElementById('product-imageB').alt = selectedProduct.productName;
        }
    }, [getSelectedValueB]);
    
    const updateTitleA = useCallback(() => {
        const selectedValueA = getSelectedValueA();
        
        // Find the product object based on selectedValueA
        const selectedProduct = compatData[selectedValueA];
        // Check if the selected product exists
        if (selectedProduct) {
            document.getElementById('titleA').textContent = selectedProduct.productName;
        }
    }, [getSelectedValueA]);
    
    const updateTitleB = useCallback(() => {
        const selectedValueB = getSelectedValueB();
        
        // Find the product object based on selectedValueA
        const selectedProduct = compatData[selectedValueB];
        
        // Check if the selected product exists
        if (selectedProduct) {
            document.getElementById('titleB').textContent = selectedProduct.productName;
        }
    }, [getSelectedValueB]);
    
    
    const [compatibilityMessage, setCompatibilityMessage] = useState("");
    
    useEffect(() => {
        const checkCompatibility = () => {
            let alertElement = document.getElementById("alertMessage");
    
            if ((getSelectedValueA() === 'Retinol' && getSelectedValueB() === 'Niacinamide') || (getSelectedValueB() === 'Retinol' && getSelectedValueA() === 'Niacinamide')) {
                setCompatibilityMessage("Not compatible");
                alertElement.classList.remove("alert-success");
                alertElement.classList.add("alert-danger");
            } else {
                setCompatibilityMessage("These are compatible!");
                alertElement.classList.remove("alert-danger");
                alertElement.classList.add("alert-success")
            }
        };
    
        const dropdownA = document.getElementById("form-a");
        dropdownA.addEventListener('change', checkCompatibility);
        dropdownA.addEventListener("change", updateImageA);
        dropdownA.addEventListener("change", updateTitleA);
    
    
        const dropdownB = document.getElementById("form-b");
        dropdownB.addEventListener('change', checkCompatibility);
        dropdownB.addEventListener("change", updateImageB);
        dropdownB.addEventListener("change", updateTitleB);
    
    
        return () => {
            dropdownA.removeEventListener('change', checkCompatibility);
            dropdownB.removeEventListener('change', checkCompatibility);
        };
    }, [getSelectedValueA, getSelectedValueB, updateImageA, updateImageB, updateTitleA, updateTitleB]);
    
    return (
        <div>
            <p>This is a tool that compares two skincare product ingredients and shows if the products are safe to combine. Select two common skincare ingredients below to see if both are compatibile. Shows some common products as well.</p>
            <div id="alertMessage" class="d-flex justify-content-center m-3">
                <h1>{compatibilityMessage}</h1>
            </div>
            <div class="compat-container container justify-content-center p-3">
                <div class="rounded row p-3">
                    <div class="col-md-6">
                        <div class="card"> 
                        {/* <img id="product-imageA" className="compat-img card-img-top mx-auto justify-content-center" src="" alt="" /> */}
                        <img id="product-imageA" class="compat-img card-img-top mx-auto justify-content-center" src="" alt=""></img>
                        <div class="compat-card card-body">
                            <h1 id="titleA" class="card-title">Product 1 Name</h1>
                            <div class="mx-auto">
                                <select class="form-select" id="form-a" aria-label='Choose the first skincare ingredient'>
                                    <option selected>Choose an Ingredient:</option>
                                    <option value="Niacinamide">Niacinamide</option>
                                    <option value="Retinol">Retinol</option>
                                    <option value="Hyaluronic Acid">Hyaluronic Acid</option>
                                    <option value="Peptides">Peptides</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card mb-3"> 
                    <img id="product-imageB" class="compat-img card-img-top mx-auto justify-content-center" src="" alt=""></img>
                    <div class="compat-card  card-body" >
                        <h1 id="titleB" class="card-title">Product 2 Name</h1>
                        <div class="mx-auto">
                            <select class="form-select" id="form-b" aria-label='Choose the first skincare ingredient'> 
                                <option selected>Choose an Ingredient:</option>
                                <option value="Niacinamide">Niacinamide</option>
                                <option value="Retinol">Retinol</option>
                                <option value="Hyaluronic Acid">Hyaluronic Acid</option>
                                <option value="Peptides">Peptides</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default Compat;