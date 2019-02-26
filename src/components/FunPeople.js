import React, { Component } from 'react'
import FunBox from './FunBox'

class FunPeople extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         funReason: '',
         buttonStatus: false,
         boxNumber: 0,
    }
    this.handleRemoveFunReason = this.handleRemoveFunReason.bind(this)
    }
    handleChangeUserName (event) {
        this.setState({
            name: event.target.value
        })
        if ((this.state.name) && (this.state.funReason)) {
            this.setState({
                buttonStatus: true
            })
        } else {
            this.setState({
                buttonStatus: false
            })
        }
    }
    handleChangeFunReason (event) {
        this.setState({
            funReason: event.target.value
        })
        if ((this.state.name) && (this.state.funReason)) {
            this.setState({
                buttonStatus: true
            })
        } else {
            this.setState({
                buttonStatus: false
            })
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            boxNumber: this.state.boxNumber + 1
        })
    }
    handleRemoveFunReason(event) {
        event.preventDefault()
        this.setState({
            boxNumber: this.state.boxNumber - 1
        })
    }
    
  render() {
    return (
    <div>
    <div className="box">
        <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="field">
                <label className="label">Name</label>
                    <div className="control">
                        <input type="text" 
                               id="nameInput" 
                               className="input is-medium" 
                               value={this.state.name}
                               onChange={(event)=> this.handleChangeUserName(event)}/>
                    </div>
            </div>
            <div className="field">
                <label className="label">Reason they are fun</label>
                <div className="control">
                        <input type="text" 
                                className="input is-medium" 
                                value={this.state.funReason}
                                onChange={(event) => this.handleChangeFunReason(event)}/>
                </div>
            </div>
            <div className="field">
                        <input type="submit" 
                                className="button is-link is-medium is-disabled" 
                                disabled={this.state.buttonStatus === true ? null : 'disabled'} 
                                value="Add Fun Person"/> 
                    </div>
        </form>
    </div>
     <div class="content is-large">
        {this.state.boxNumber === 0 ? <p>Unfortunately, no one is fun :(</p> : [...Array(this.state.boxNumber)].map((item,index) => <FunBox key={index}
                                                                                                                                            funPerson={this.state.name}
                                                                                                                                            funReason={this.state.funReason}
                                                                                                                                            handleRemoveFunReason={this.handleRemoveFunReason}/>)
    }
     </div>
    </div>
    )
  }
}

export default FunPeople