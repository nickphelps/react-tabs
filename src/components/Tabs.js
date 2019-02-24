import React, { Component } from 'react'
import Tab from './Tab'

//treat properties as inputs to the functions

 class Tabs extends Component {
  render() {
    let  {activeTab, changeTab} = this.props
    //same thing as const activeTab = this.props.activeTab
    return (
        <div>
        <div className="tabs is-boxed is-medium">
        <ul>
          <Tab label="Hello React" 
                isActive={activeTab === 0}
                handleClick={() => changeTab(0)}/>
          <Tab label="Lorem Ipsum" 
                isActive={activeTab === 1}
                handleClick={() => changeTab(1)}/>
          <Tab label="Login Form" 
                isActive={activeTab === 2}
                handleClick={() => changeTab(2)}/>
          <Tab label="Fun People" 
                isActive={activeTab === 3}
                handleClick={() => changeTab(3)}/>
        </ul>
        </div>
      </div>
    )
  }
}

export default Tabs