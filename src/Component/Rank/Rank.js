import React from 'react';


const Rank = ({name,count}) =>
{
	return (
    <div>
        <div className='white f3'>
            {`${name}, your current count is...`}
        </div>
        <div className='white f1'>
           {count}
         </div>
    </div>
	
	);
}


export default Rank ;