import React, { useState } from 'react';
import image from '../images/243266401_2326504914152868_9093291250482122121_n.jpg'
import { addToDb } from '../utilities/fakedb';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
  const { cart } = props;
  const [value, setvalue] = useState([0]);
  let total = 0;
  const breakTime = (compo) => {
    console.log(compo);
    setvalue(compo);
    addToDb(compo);
  }
  for (const element of cart) {
    total = total + element.time;
  }
  const difftoast = () => {
    toast.info("Activity Successful");
  }
  return (
    <div className='Cart'>
      <div className='cart-component'>
        <img className='cart-img' src={'https://avatars.githubusercontent.com/u/58916077?v=4'} alt="" />
        <h5 className='cart-head'>Jahidul Islam Topu</h5>
      </div>
      <div className='cart-info'>
        <h5>W:74kg</h5>
        <h5>h:5.8</h5>
        <h5>A:24yr</h5>
      </div>
      <h4>Add A Break</h4>
      <div className='cart-time'>
        <button onClick={() => breakTime(10)} className='btn-1'><p>10s</p></button>
        <button onClick={() => breakTime(20)} className='btn-2'><p>20s</p></button>
        <button onClick={() => breakTime(30)} className='btn-3'><p>30s</p></button>
        <button onClick={() => breakTime(40)} className='btn-4'><p>40s</p></button>

      </div>
      <h4>Exercise Details</h4>
      {/* <p>Selected Items: {cart.length}</p> */}
      <h4 className='cart-total-time'>Exercise Time:{total}second</h4>
      <h4>Break Time:{value}second</h4>
      <button onClick={difftoast} className='activity'>
        <p>Activity Completed</p>
      </button>
      <ToastContainer />
    </div>
  );
};

export default Cart;