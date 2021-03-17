import React from 'react'
import '../../App.css';
import { Button_3 } from '../Button';
import './Products.css';
import Footer from '../Footer';

function Products() {
    return (
        <>
        <div className='product-container'>
            <h1>ASSIGNMENTS</h1>
            <p>Here are some assignments</p>
            <div className="product-btns">
                <Button_3 className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    ASSIGMENTS
                </Button_3>
            </div>
        </div>
        
        <Footer />
        </>
    );
}

export default Products;


























/*import React from "react";
import '../../App.css';

export default function Products() {
    return <h1 className='products'>PRODUCTS</h1>
    
}*/