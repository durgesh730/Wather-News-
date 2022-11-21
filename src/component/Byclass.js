import React, { Component } from 'react'
import { GoPrimitiveDot } from 'react-icons/go';
import { BsFillSunFill } from 'react-icons/bs';
import './Byclass.css';
import Navbar from './Navbar';

export default class Byclass extends Component {

    constructor(){
        super();
        this.state  = {
            city: undefined,
            country: undefined,
            Max: undefined,
            Min:undefined,
            tem:undefined,
            des: undefined
        }
        this.getWeather();
    }

    getWeather= async ()=>{

        const url = await fetch ( `http://api.openweathermap.org/data/2.5/weather?q=Ayodhya&units=metric&appid=dea5d2d317022630ef6245327815bdc3`);
        const response = await url.json();
        console.log(response);

        this.setState({
            city: response.name,
            country: response.sys.country,
            Max:response.main.temp_max,
            Min:response.main.temp_min,
            tem:response.main.temp
        });
    }
   
  render() {
    return (
      <>
        <Navbar/>
         <div className='style'>
          <div className='container'>
               <p className='icon'><BsFillSunFill/></p>
               <div className='details'>
               <h2>{this.state.country}</h2>
               <h3>{this.state.city}</h3>
               <h4>{this.state.tem}<GoPrimitiveDot/></h4>
               <h5>{this.state.Max}<GoPrimitiveDot/>| {this.state.Min}<GoPrimitiveDot/></h5>
               </div>
          </div>
        </div>
      </>
    )
  }
}
