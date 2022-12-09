import React from 'react';
import './Modal.css'

const Modal = (props) => {

    console.log(props);

    
    return (
        <div className='modal' style={{
            transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.visible ? '1' : '0'
        }}>
            <div className='container__closeButton'>
                <button  onClick={props.hide} className='closeButton'>X</button>
            </div>
            <article className="shadow-md bg-white md:full ">
          
                <img className="h-55 w-full object-cover md:h-80 " src={props.urls.full}  alt={props.user.username}
                />
                  <ul>
                    <li  >Author: {props.user.name }  </li>
                </ul>
                
            </article> 
            
        </div>
    );
    
}

export default Modal;
