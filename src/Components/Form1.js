import React from 'react';


class Form extends React.Component{
constructor(props){
super(props)
this.state= {
    name:'',
    password:'',
    birthday:'',
    gender:'Gender',
    submitted:false
}
  
}    

handleChange= event => {
this.setState({username:event.target.value});
}

handleChangePassword= event=>{
    this.setState({password:event.target.value});
}

handleChangeBirthday= event =>{
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
            {this.state.name} 
            </p>
            <p>
            {this.state.breed}
            </p>
            <p>
            {this.state.birthday}
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
    <label>Pet's Name:</label>
 <input name='username' placeholder='Username' type="text" value={this.state.username} onChange={this.handleChange} required/> <br/>
 </div>


 <div className="upload">
<label>Upload Photo</label>
 <input type="file" onChange={this.fileSelectedHandler}/>
</div>

<br/>

  <div className='password'>
  <label>Breed:</label>
 <input name='breed' placeholder='Breed' type="text" value={this.state.password} onChange={this.handleChangePassword} required/> <br/>
 </div>
 <br/>
 <div className='age'>
 <label>Birthday:</label>
 <input name='birthday' placeholder='Birthday' type="date" value={this.state.birthday} onChange={this.handleChangeBirthday} required/> <br/>
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


<br/>
 <div className='gender'>
 <label>Status:</label>

 <select  name='gender' placeholder='Gender'  value={this.state.gender} onChange={this.handleSelect} required>
 <option disabled hidden>Status</option>
<option>Spayed</option>
<option>Neutered</option>
</select> <br/>
</div>
<br/>

<div className='gender'>
 <label>Weight:</label>

 <select  name='gender' placeholder='Gender'  value={this.state.gender} onChange={this.handleSelect} required>
 <option disabled hidden>weight</option>
<option>0-25 lbs</option>
<option>25-50 lbs</option>
<option>50-100 lbs</option>
<option>100+ lbs</option>
</select> <br/>
</div>
<br/>

<div className='register'>
<button type="submit">Register Pet</button>
</div>
                </form>

{user}

            </div>
        );
    }
}
export default Form
