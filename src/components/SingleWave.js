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
    var component = this;
    var period = 40;
    var count = period * 3;
    var dx = (2*Math.PI / period);
    var amplitude = 20;
    var intervalId = setInterval(function(){
      component.setState({'ys':component.calc(dx, amplitude, count)});
    },25)
    component.setState({intervalId:intervalId});
  }

  calc = (dx, amplitude, count) => {
    var component = this;
    var ys = [];
    for (var i = 0; i <=count; i++){
      ys.push(Math.sin(component.state.x) * amplitude);
      component.state.x += dx;
    }
    return ys;
  }

  render(){
    let { top } = this.state;

    return(
      <div className='loader'>
        {
          this.state.ys.map(function(y, x){

            return (
              <div>
                <div style={{
                  'top':y + top + 'vh'
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