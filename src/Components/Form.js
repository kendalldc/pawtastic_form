import React from 'react';


class Form extends React.Component{
constructor(props){
super(props)
this.state= {
    username:'',
    password:'',
    age:'',
    gender:'Gender',
    occupation:'',
    submitted:false
}
  
}    

handleChange= event => {
this.setState({username:event.target.value});
}

handleChangePassword= event=>{
    this.setState({password:event.target.value});
}

handleChangeAge= event =>{
    this.setState({age:event.target.value});
}

handleSelect = event =>{
    this.setState({gender:event.target.value});
}

handleChangeOccupation = event =>{
    this.setState({occupation:event.target.value});
}

handleSubmit= (event) =>{
event.preventDefault()     
console.log(this.state);
this.setState({submitted:true})
}
    render(){
        let user= ""
        if(this.state.submitted){
          user= (
           <div>
               <p>
            {this.state.username} 
            </p>
            <p>
            {this.state.password}
            </p>
            <p>
            {this.state.age}
            </p>
            <p>
            {this.state.gender}
            </p>
            <p>
            {this.state.name}
            </p>
           </div>   
          )
        }
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
<div className='username'>
    <label>Username:</label>
 <input name='username' placeholder='Username' type="text" value={this.state.username} onChange={this.handleChange} required/> <br/>
 </div>
 <br/>
  <div className='password'>
  <label>Password:</label>
 <input name='password' placeholder='Password' type="password" value={this.state.password} onChange={this.handleChangePassword} required/> <br/>
 </div>
 <br/>
 <div className='age'>
 <label>Age:</label>
 <input name='age' placeholder='Age' type="number" value={this.state.age} onChange={this.handleChangeAge} required/> <br/>
 </div>
 <br/>
 <div className='gender'>
 <label>Gender:</label>

 <select  name='gender' placeholder='Gender'  value={this.state.gender} onChange={this.handleSelect} required>
 <option disabled hidden>Gender</option>
<option>Female</option>
<option>Male</option>
<option>Other</option>
</select> <br/>
</div>
<br/>

<div className='occupation'>
<label>Occupation:</label>
     <input name='Occupation' placeholder='Occupation' type="text" value={this.state.name} onChange={this.handleChangeOccupation}required/><br/>
 </div>
 <br/>

<div className='createAccount'>
<button type="submit">Create Account</button>
</div>
                </form>

{user}

            </div>
        );
    }
}
export default Form
