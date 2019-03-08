import React, { Component } from 'react';

const period = 40;
const count = period * 3;
const dx = (2*Math.PI / period);
const amplitude = 20;

class SingleWave extends Component {

  state = {
    'top':30,
    fx:[],
    x: 1,
    intervalId: null,
    pause: false 
  }

  componentDidMount = () => {
    console.log('WAVES MOUNTED ')
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
      intervalId: setInterval( () => this.calculate(dx, amplitude, count), 40)
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

  calculate = (dx, amplitude, count) => {
    let { x, fx }= this.state
    // for (var i = 0; i <=count; i++){
    //   fx.push(Math.sin(x) * amplitude);
    //   x += dx; 
    // }
    fx.push(Math.sin(x) * amplitude)
    if(fx.length > count){
      fx.upshift();
    }
    this.setState({
      fx: fx
    })
    x += dx
    this.setState({
      x : x
    })
    // return fx; 
  }

  render(){
    let { top, fx } = this.state;

    return(
      <div className="wave-container">
        <div className="buttons-container">
          <button onClick={()=>{clearInterval(this.state.intervalId)}}> Stop </button>
          <button onClick={()=>{this.animate()}}> Run </button>
          <button onClick={()=>{this.setState({'fx':this.calculate(dx, amplitude, count)})}}> Increment </button>
        </div>
        <div className='loader'>
          {
          // this.stackIncrement()
            fx.map(function(y, index){
              console.log(fx);
              return (
                <div>
                  <div style={{
                    'top':y + top + 'vh',
                    'background' : (index == 0) ? '#33ccff' : 'yellow'
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