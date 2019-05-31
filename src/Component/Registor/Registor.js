import React from 'react';


class Registor extends React.Component
{

constructor(props)
{
   super(props)
   this.state = {
     name:'',
     email:'',
     pass:''
   }
}

  onname = (event) =>
  {
     this.props.swi(0);
     this.setState({name:event.target.value})
  };
  onemail = (event) =>
  {
     this.props.swi(0);
     this.setState({email:event.target.value})
  };
  onpass = (event) =>
  {
     this.props.swi(0);
     this.setState({pass:event.target.value})
  }
  
 onSub = () =>{
    

    const {email,name,pass} = this.state;
     if(!email.includes("@") || !email.includes(".") || !email || !pass || !name)
     {
         var op = this.props.value;
         op++;
         return this.props.swi(op);
     }
   fetch('http://localhost:3000/registor' , {
    method : 'post',
    headers: {'Content-Type': 'application/json'},
    body : JSON.stringify({
          name : this.state.name,
          email : this.state.email,
          password : this.state.pass
        })
   })
     .then(res => res.json())
     .then(user => {
       if(user._id){
        this.props.usercha(user);
         this.props.onRout('home');
       }
       else
       {
          var op = this.props.value;
         op++;
         return this.props.swi(op);
       }
     })
 }


  render()
  {
    return (
  <article className="br  ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" >
  <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Registor</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
        <input 
        onChange= {this.onname}
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="Name" name="Name-address"  
        id="Name-address" 
        />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
        onChange = {this.onemail}
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" name="email-address"  
        id="email-address" 
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
        onChange = {this.onpass}
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" name="password"  
        id="password"
         />
      </div>
    </fieldset>
    <div className="">
      <input 
        onClick = {this.onSub}
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Registor" 
      />
    </div>
  </div>
</main>
</article>
  );
  }
	
}


export default Registor ;