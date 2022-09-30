import React from 'react';
import './Element.css'
const Element = (props) => {
    const {img,name,age,time} = props.element;
   
    return (
        <div className='element'>
            <img className='element-img' src={img} alt="" />
            <h4 className='element-name'>{name}</h4>
            <p className='element-age'>For age:{age}</p>
            <p className='element-time'>Time Required: {time}s</p>
            <button onClick={()=>props.handleclick(props.element)} className='button-add'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Element;