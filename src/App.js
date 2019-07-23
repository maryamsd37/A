import React, { Component } from 'react';
// Removed logo since we don't need it anymore
import './App.css';

class App extends Component {


  handleChange =(e) => {
  console.log(e.target.value);
  }

  handleSubmit =(e) => {
    e.preventDefault();
  console.log();
  }

  render() {
    return (
      <div classname="container">
        <h1>Personal Data:</h1>

        <form onSubmit={this.handleSubmit}>
        <label> Name * :</label><p/>
        <input type="text" name="fname" id="name" required
        placeholder="Your name.. " onChange={this.handleChange}/>

        <p>Date of Birth *:<p/>
        <input type="date" equired
        placeholder="1/1/1900.. " onChange={this.handleChange}/></p>
        <p> Nationality * :<p/>
        <input type="text" equired
        placeholder="Saudi.. " onChange={this.handleChange}/></p>
        <p>  Marital Status :<p/>
        <input type="text"  placeholder="single.. "
         onChange={this.handleChange}/></p>
        <p> address:<p/>
        <input type="text"
        placeholder="Riyadh-Ar Rawdah.. "onChange={this.handleChange}/></p>
        <p>mobile *:<p/>
        <input type="number"equired
        placeholder="0555555555.. " onChange={this.handleChange}/></p>
        <label> Email * :</label><p/>
        <input type="email" name="email" id="num" required
        placeholder="example@example.com " onChange={this.handleChange}/>

        <p>Scientific Qualification:<p/>
        <input type="text"placeholder="Secondary,University.. "
         onChange={this.handleChange}/></p>
        <p>Average:<p/>
        <input type="number" placeholder="3.5,4.. "
        onChange={this.handleChange}/></p>
        <p>Training Courses:<p/>
        <input type="text" placeholder="Computer, English.. "
        onChange={this.handleChange}/></p>
        <p>Private skills:<p/>
        <input type="text" placeholder="Flexibility to work.. "
        onChange={this.handleChange}/></p>
        <p>Languages:<p/>
        <input type="text" placeholder="Arabic,English.. "
        onChange={this.handleChange}/></p>

        <p1> *Requieed Fields </p1><p/>
        <button>submit</button>
        </form>


      </div>
    );
  }
}
export default App;
