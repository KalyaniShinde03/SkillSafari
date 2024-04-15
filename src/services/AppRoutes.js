import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../pages/Header';
import CourseDetail from '../pages/CourseDetail';
import User from '../pages/User';



const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
           <Header/>
                <Routes>
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route  path="/courses/:id" element={<CourseDetail></CourseDetail>}></Route>
                    <Route path='/user' element={<User></User>}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;