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

  // Currently under works. 
  // initialize = () => {
  //   let x = this.state.x;
  //   var data = new Queue();
  //   for (var i = 0; i<= count; i++){
  //     data.add(Math.sin(x) * amplitude);
  //     data.remove();
  //   }
  // }

  animate = () => {
    if(this.state.intervalId){
      clearInterval(this.state.intervalId);
    }
    // this.setState({
    //   intervalId: setInterval(function(){
    //     this.setState({'fx':this.calculate(dx, amplitude, count)});
    //   }.bind(this),40) 
    // })
    this.setState({
      intervalId: setInterval( () => this.calculate2(dx, amplitude, count), 40)
    })
  }

  stackIncrement = () => {
    let { fx, top } = this.state;
    for(let index = 0; index <= count; index++) {
      let y = fx.pop();
      console.log(fx);
      return(
          <div>
            <div style={{
              'top':y + top + 'vh',
              'background' : (index == 0) ? '#33ccff' : 'yellow'
            }}></div>
          </div>
      )
    }
  }

  calculate2 = (dx, amplitude, count) => {
    let { x, fx }= this.state;
    let center = fx.length/2;
    

    // for(let i = center; i<= fx.length; i++){
    //   let current = fx[i];
    //   fx[i] = fx[i-1];
    // }
    let source =  Math.sin(x) * amplitude;

    fx[center] = source;
    for(let i = fx.length; i>= center; i--){
      fx[i] = fx[i-1];
    }
    for(let j = center; j>=0; j--){
      fx[j] = fx[j+1];
    }
    this.setState({
      x: x + dx,
      fx: fx
    })
    
  }

  calculate = (dx, amplitude, count) => {
    let { x, fx }= this.state
    // for (var i = 0; i <=count; i++){
    //   fx.push(Math.sin(x) * amplitude);
    //   x += dx; 
    // }
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
    // return fx; 
  }

  render(){
    let { top, fx } = this.state;
    console.log(fx);
    return(
      <div className="wave-container">
        <div className="buttons-container">
          <button onClick={()=>{clearInterval(this.state.intervalId)}}> Stop </button>
          <button onClick={()=>{this.animate()}}> Run </button>
          <button onClick={()=>{this.setState({'fx':this.calculate2(dx, amplitude, count)})}}> Increment </button>
        </div>
        <div className='loader'>
          {
          // this.stackIncrement()
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