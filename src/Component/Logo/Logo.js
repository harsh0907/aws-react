import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () =>
{
	return (
	<div className='ma4 mt0 '  >
		<Tilt className="Tilt br2 shadow-2 logo" options={{ max : 55 }} style={{ height: 125, width: 125 }} >
            <div className="Tilt-inner pt4 "> <img alt='brain' src={brain} /> </div>
         </Tilt>
	</div>
	);
}


export default Logo ;