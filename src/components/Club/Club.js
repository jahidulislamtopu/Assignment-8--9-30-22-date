import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

import Element from '../Element/Element';
import './Club.css'
const Club = () => {
    const [elements, setelement] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('elements.json')
            .then(res => res.json())
            .then(data => setelement(data))
    }, [])

    const handleclick = (element) => {
        const newcart = [...cart, element];
        setCart(newcart);
        addToDb(element.id);
    }
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedelement = elements.find(element => element.id === id);
            if (addedelement) {
                const index = storedCart[id];
                addedelement.index = index;
                console.log(addedelement);
                savedCart.push(addedelement);
            }

        }
        setCart(savedCart);
    }, [elements])

    return (
        <div className='Club'>
            <div className="exercise-container">


                {
                    elements.map(element => <Element element={element} key={element.id} handleclick={handleclick}></Element>)
                }
                <p>Question1:How does react work?
                    <br />
                    Ans:
                    ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
                </p>
                <p>Question1:Difference Between props and State?
                    <br />
                    Ans:
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                </p>
                <p>Question1:What does the useEffect API do other than load data?
                    <br />
                    Ans:
                    1.Running once on mount: fetch API data.
                    2.Running on state change: validating input field.
                    3.Running on state change: live filtering.
                    4.Running on state change: trigger animation on new array value.
                    5.Running on props change: update paragraph list on fetched API data update
                </p>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};
//this part is end here 
export default Club;