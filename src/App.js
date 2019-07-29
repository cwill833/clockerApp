import React, {Component} from 'react';
import getCurrentLatLng from './utils/Geolocator'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
        myLat: null,
        myLng: null,
        weWorkLat: 30.2685,
        weWorkLng: -97.743
    }
  }

  componentDidMount(){
    getCurrentLatLng().then(results =>{
      this.setState({
        myLat: results.lat,
        myLng: results.lng
      })
    })
  }

  render(){
    let latDif = Math.abs(this.state.myLat - this.state.weWorkLat).toFixed(4)
    let lngDif = Math.abs(this.state.myLng - this.state.weWorkLng).toFixed(3)

    let clockInLat = !parseFloat(latDif) ? "Clocked in": "Not clocked in"
    let clockInLng = !parseFloat(lngDif) ? "Clocked in": "Not clocked in"

    return(
      <div className="flex-r">
        <h1>Hello World!</h1>
        <h2>This is my location</h2>
        <h3>lat: {this.state.myLat}</h3>
        <h3>lng: {this.state.myLng}</h3>
        <h4>Based on LAT we are: {clockInLat}</h4>
        <h4>Based on LNG we are: {clockInLng}</h4>
      </div>
    )
  }
}


export default App;
