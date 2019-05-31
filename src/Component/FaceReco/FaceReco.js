import React from 'react';
import './FaceReco.css';

const FaceReco = ({box,image}) =>
{
	return (
	<div className='center ma'>
	 <div className='absolute mt2 ' >
       <img id ='image' alt=' ' src={image} width='500px' height='auto' />  
       <div className='bound' style={{top: box.top, right: box.right, bottom: box.bottom, left: box.left}} >
     </div>
     </div>
     
	</div>
	);
}


export default FaceReco ;