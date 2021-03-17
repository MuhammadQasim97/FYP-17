import React from 'react'
import '../../App.css';
import { Button } from '../Button';
import './Courses.css';
import Footer from '../Footer';

function Courses() {
    return (
        <>
        <div className='course-container'>
            <h1>COURSES</h1>
            <p>We have courses for you</p>
            <div className="course-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    COURSES
                </Button>
            </div>
        </div>
        
        <Footer />
        </>
    );
}

export default Courses;
