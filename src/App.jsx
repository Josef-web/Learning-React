import React from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from './List.jsx';
import ProfilePicture from "./ProfilePicture.jsx";
import SetterFunctions from "./SetterFunctions.jsx";
import Counter from "./Counter.jsx";
import MyComponent from "./MyComponent.jsx";
import ColorPicker from "./ColorPicker.jsx";
import Car from "./Car.jsx";
import ArrayList from "./ArrayList.jsx";
import ArrayOfObjects from "./ArrayOfObjects.jsx";
import ToDoList from "./ToDoList.jsx";
import UseEffectHook from "./UseEffectHook.jsx";
import DigitalClock from "./Digital-Clock/DigitalClock.jsx";
import {BrowserRouter as Router, createBrowserRouter, Routes, Route, RouterProvider, Link, useNavigate} from "react-router-dom";
import ComponentA from "./ComponentA.jsx";

function App() {


        const fruits = [{id:1, name:"apple", calories: 95},
                                                {id:2, name:"banana", calories: 45},
                                                {id:3, name:"orange", calories: 105},
                                                {id:4, name:"coconut", calories: 159},
                                                {id:5, name:"pineapple", calories: 37}];

        const vegetables = [{id:6, name:"potatoes", calories: 110},
                                                {id:7, name:"calery", calories: 15},
                                                {id:8, name:"carrots", calories: 25},
                                                {id:9, name:"corn", calories: 63},
                                                {id:10, name:"broccoli", calories: 50}];
        return(
            <>
                <Router>
                    <Routes>
                        {/* Ana sayfa */}
                        <Route
                            path="/"
                            element={
                                <>
                                    <Header/>
                                    <nav className="bg-gray-100 p-4">
                                        <ul className="space-y-2">
                                            <li className="rounded-lg  shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/use-effect-hook"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    UseEffectHook
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/to-do-list"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    ToDoList
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/array-of-objects"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    ArrayOfObjects
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/array-list"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    ArrayList
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/car" className="block px-4 py-2 text-gray-700 font-semibold">
                                                    Car
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/food"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    Food
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/card"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    Card
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/student"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    Student
                                                </Link>
                                            </li>
                                            <li className="rounded-lg  shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/list"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    List
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/user-greeting"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    UserGreeting
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/button"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    Button
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/profile-picture"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    ProfilePicture
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/setter-functions"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    SetterFunctions
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/counter"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    Counter
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/my-component"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    MyComponent
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/color-picker"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    ColorPicker
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/digital-clock"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    Digital Clock
                                                </Link>
                                            </li>
                                            <li className="rounded-lg shadow-sm bg-white hover:bg-gray-200 transition">
                                                <Link to="/component-a"
                                                      className="block px-4 py-2 text-gray-700 font-semibold">
                                                    ComponentA
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
                                    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
                                    <Footer/>
                                </>
                            }
                        />
                        {/* Diğer sayfalar */}
                        <Route path="/use-effect-hook" element={<UseEffectHook/>}/>
                        <Route path="/to-do-list" element={<ToDoList/>}/>
                        <Route path="/array-of-objects" element={<ArrayOfObjects />} />
                        <Route path="/array-list" element={<ArrayList />} />
                        <Route path="/car" element={<Car />} />
                        <Route path="/food" element={<Food />} />
                        <Route path="/card" element={<Card />} />
                        <Route path="/student" element={<Student name="Example" age={25} isStudent={true} />} />
                        <Route path="/list" element={<List />} />
                        <Route path="/user-greeting" element={<UserGreeting isLoggedIn={true} username="User" />} />
                        <Route path="/button" element={<Button />} />
                        <Route path="/profile-picture" element={<ProfilePicture />} />
                        <Route path="/setter-functions" element={<SetterFunctions />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/my-component" element={<MyComponent />} />
                        <Route path="/color-picker" element={<ColorPicker />} />
                        <Route path="/digital-clock" element={<DigitalClock />} />
                        <Route path="/component-a" element={<ComponentA />} />
                    </Routes>
                </Router>
            </>
        );
}


export default App
