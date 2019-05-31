import React from 'react';

const Eror = ({router}) =>
{
	return (
<article className="  w-100 w-50-m w-25-l mw6  center" >
<main className="pa0 black-80">
  <div className="measure ">
  	 <fieldset id="sign_up" className="ba b--transparent ph0 slower mh0">
  	 {
  	 	router === 'Signin' ? <legend className=" dark-red animated shake f5 fw6 ph0 mh0">Please Enter valid Email and Password</legend>
  	 	: <legend className=" dark-red animated shake f5 fw6 ph0 mh0">Please Enter valid Name,Email and Password</legend>
  	 }
        
    </fieldset>
  </div>
</main>
</article>
	);
}


export default Eror;