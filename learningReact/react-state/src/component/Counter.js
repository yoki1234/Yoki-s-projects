import React, { Component } from 'react'

class Counter extends Component {
 
   
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        },()=>{console.log('callBack',this.state.count)})
        // this.state.count = this.state.count+1;
        // console.log(this.state.count);
    }
    Decrement(){
        this.setState({
            count:this.state.count-1
        },()=>{console.log('callBack',this.state.count)})

    }


  
  render() {
    return (
        <div>
             <div>Count-{this.state.count}</div>
             <button onClick={()=>{this.increment()}}>Increment</button>
             <button onClick={()=>{this.Decrement()}}>Decrement</button>
        </div>
     
    )
  }
}

export default Counter
