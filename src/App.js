import React, { Component} from 'react';
import Style from './App.css'

class Hello extends Component
{
  render(){
    return <div>Hello {this.props.name}!</div>
  }
}

class App extends Component
{
  constructor() {
    super()
    this.state = {
      name: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ name: e.target.value })
  }

  render(){
    return <div>
      <Hello name={this.state.name}/>
      <input type="text" onKeyDown={this.handleChange}/>
    </div>
  }
}

export default App;
