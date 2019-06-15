import React, { Component } from 'react';

const period = 40;
const count = period * 3;
const dx = (2*Math.PI / period);
const amplitude = 20;

class SingleWave extends Component {

  state = {
    'top':30,
    fx:[],
    x: 0,
    intervalId: null,
    pause: true 
  }

  componentDidMount = () => {
    console.log('WAVES MOUNTED ')
    let fx = []
    for(var i = 0; i <= count; i++){
      fx.push(0);
    }
    this.setState({
      fx:fx
    })
    this.animate();
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  }

  animate = () => {
    if(this.state.intervalId){
      clearInterval(this.state.intervalId);
    }
    this.setState({
      intervalId: setInterval( () => this.calculate(dx, amplitude, count), 40)
    })
  }

  calculate = (dx, amplitude, count) => {
    let { x, fx }= this.state
    fx.push(Math.sin(x) * amplitude)
    console.log(fx.length, count)

    if(fx.length >= count){
      fx.shift();
    }
    //change x to time. 
    console.log('AFTER UNSHIFT', fx.length, count)
    this.setState({
      x: x + dx,
      fx: fx
    })
  }

  render(){
    let { top, fx } = this.state;
    console.log(fx);
    return(
      <div className="wave-container">
        <div className="buttons-container">
          <button onClick={()=>{clearInterval(this.state.intervalId)}}> Stop </button>
          <button onClick={()=>{this.animate()}}> Run </button>
          {/* <button onClick={()=>{this.setState({'fx':this.calculate(dx, amplitude, count)})}}> Increment </button> */}
        </div>
        <div className='loader'>
          {
            fx.map(function(y, index){
              return (
                <div>
                  <div style={{
                    'top':y + top + 'vh',
                    'background' : (index == count) ? '#33ccff' : 'yellow'
                  }}></div>
               </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default SingleWave