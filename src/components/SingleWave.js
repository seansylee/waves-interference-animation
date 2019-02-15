import React, { Component } from 'react';


class SingleWave extends Component {

  state = {
    'top':30,
    ys:[],
    x: 1,
    intervalId: null
  }

  componentDidMount = () => {
    console.log('WAVES MOUNTED ')
    this.animate();
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  }

  animate = () => {
    var period = 40;
    var count = period * 3;
    var dx = (2*Math.PI / period);
    var amplitude = 20;
    var intervalId = setInterval(function(){
      this.setState({'ys':this.calc(dx, amplitude, count)});
    }.bind(this),40)
    this.setState({intervalId:intervalId});
  }

  calc = (dx, amplitude, count) => {
    var ys = [];
    let x = this.state.x
    for (var i = 0; i <=count; i++){
      ys.push(Math.sin(x) * amplitude);
      x += dx; 
    }

    // This might be the key to iteration! 
    this.setState({
      x : x
    })
    return ys; 
  }

  render(){
    let { top, ys } = this.state;

    return(
      <div className='loader'>
        {
          ys.map(function(y, index){
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
    )

  }
}


export default SingleWave