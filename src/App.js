import React, { Component } from 'react';
import Navigator from './Component/Navigator/Navigator';
import Logo from './Component/Logo/Logo';
import InputPanel from './Component/InputPanel/InputPanel';
import FaceReco from './Component/FaceReco/FaceReco';
import Registor from './Component/Registor/Registor';
import Err from './Component/Error/Error';
import Eror from './Component/Error/eror';

import Signin from './Component/Signin/Signin';
import Rank from './Component/Rank/Rank';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import 'animate.css'






const parti = {
 particles:{
  number:{
    value :30,
    density :{
      enable:true,
      value_area:500
    }
  },
  line_linked: {
    shadow: {
     enable: true,
    color: "#3CA9D1",
   blur: 5
   }
  }
 }
}


const init = {
        input : '',
        image :'',
        box: {},
        router: 'Signin',
        user:{
          _id:'',
          name:"",
          email:"",
          count: 0,
          jointed : ''
        },
        swi: 0
      } 



class App extends Component {
  constructor()
  {
      super();
      this.state = init;
        
  }

  usercha = (event)=>
  {
    this.setState({user: {name : event.name,
      email: event.email,
      _id: event._id,
      count: event.entries,
      jointed: event.jointed
  }})
  }


   onin = (event) =>{
       this.setState({input:event.target.value});
       }

   facebox = ( data )=>
   {
     const op = data.outputs[0].data.regions[0].region_info.bounding_box;

     const jl =document.getElementById('image');
     const wid = jl.width;
     const hig = jl.height;
     return {
        top :  op.top_row*hig,
        bottom : hig - (op.bottom_row*hig),
        left : op.left_col*wid,
        right : wid - (op.right_col*wid)
     }
   } 

   disbox = (box)=>
   {
      this.setState({box : box});

   }

   onsubmit = () =>
   {
     
    this.setState({image:this.state.input}); 
    fetch('http://localhost:3000/imageurl' , {

          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          input : this.state.input
          })
       })
    .then(data => data.json())
     .then((response) => {

        if(response)
        {
          fetch('http://localhost:3000/image' , {

          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          _id : this.state.user._id
          })
       })
       .then((res) => res.json())
       .then((user) => {console.log(user);this.setState(Object.assign(this.state.user, {count: user}))})

    }
     this.disbox(this.facebox(response));

   })
      .catch((err)=> console.log(err));
    
    

    }  
    onRout = (data) =>
    {
       if(data === 'Signout')
       {
            this.setState(init);
       }
       else
       {
            this.setState({router : data,swi:0})
       }
    }  
    changeswi = (event) =>
    {
       this.setState({swi:event})
    }

  render() {




    return (
      <div className="App">
      {<Particles className='part'
                params={parti} />}
        <Navigator check={this.state.router} onRout={this.onRout}/>
        {
          this.state.swi === 0 ? 
             <div></div>:(
               this.state.swi%2 === 0 ? <Err router={this.state.router}/> : <Eror router={this.state.router}/>
             )
        }
        { this.state.router === 'Signin' ?
       <Signin value={this.state.swi}swi={this.changeswi}usercha={this.usercha} onRout={this.onRout}/> :
       (
        this.state.router === 'registor' 
        ? <Registor value={this.state.swi} swi={this.changeswi} usercha={this.usercha} onRout={this.onRout}/> 
        : <div>
        <Logo />
       <Rank name={this.state.user.name} count={this.state.user.count}/>
       <InputPanel onn={this.onin} onsubmit={this.onsubmit}/>
       <FaceReco  box={this.state.box} image={this.state.image}/>
       </div>

       )
        }
      </div>
    );
  }
}

export default App;
