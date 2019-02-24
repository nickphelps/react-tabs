import React, { Component } from 'react';
import '../styles/App.css';
import Tabs from './Tabs'
import HelloReact from './HelloReact'
import LoremIpsum from './LoremIpsum'
import Login from './LoginForm'
import FunPeople from './FunPeople'

//app controls what displays . Tabs should just care about Tabs and not state.
class App extends Component {
  //managing active tab in app
  constructor(props) {
    super(props)
  
    this.state = {
      //when site loads this is the default tab
       activeTab: 0,
    }
    //binding this. We need to do this because we want 'this' to be this 'this' when we call 'this' in our child component
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (newTab) {
    //getting funtion downt to tab
    // console.log(newTab)
    this.setState({
      activeTab: newTab
    })
  }
  render() {
    return (
      <section className="section">
        <div className="container">
            <Tabs activeTab={this.state.activeTab} 
                  changeTab={this.changeTab}/> 
                  <br></br>
            {this.state.activeTab === 0 ? <HelloReact /> : null}
            {this.state.activeTab === 1 ? <LoremIpsum /> : null}
            {this.state.activeTab === 2 ? <Login /> : null}
            {this.state.activeTab === 3 ? <FunPeople /> : null}
          </div>
      </section>
    );
  }
}

export default App;


