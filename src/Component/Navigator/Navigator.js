import React from 'react';

const Navigator = ({check,onRout}) =>
{
	return (
		<div>
	    {check === 'home' ? 
	    <nav style={{display:'flex' , justifyContent: 'flex-end'}}>
		   <p  onClick = {() => onRout('Signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav> :
		<nav style={{display:'flex' , justifyContent: 'flex-end'}}>
		   <p  onClick = {() => onRout('Signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
		   <p  onClick = {() => onRout('registor')} className='f3 link dim black underline pa3 pointer'>Registor</p>
		</nav> 
	    }
	    </div>
	);
}


export default Navigator;