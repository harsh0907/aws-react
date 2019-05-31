import React from 'react';
import './InputPanel.css'

const InputPanel = (props) =>
{
	return (
	<div >
		<p className='f3'>{'It is An Amazing App , once try it'}</p>
        <div className='center'>
            <div className='magic center pa4 br3 shadow-5'>
        	   <input 
                  className='f4 pa2 w-70 center'  
                  type='text' 
                  placeholder='Enter Url'
                  onChange= {props.onn}
                />
        	   <button 
                 className='w-30 f4 link ph3 pv2 dib white bg-light-purple grow pointer'
                 onClick ={props.onsubmit}
               >Detect</button>
        	</div>
        </div>
	</div>
	);
}


export default InputPanel ;