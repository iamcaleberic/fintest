import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, List, Label, Divider, Message, Dropdown } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import linkState from './util/linkState'
import toPay from './util/to_pay'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      amount: 0,
      finalAmount: 0
    }

    this.onKeyUp = this.onKeyUp.bind(this)
  }

  onKeyUp(e){
    e.preventDefault()
    let state = this.state
    let amount = state.amount
    console.log(amount);
    // display error Message
    // if (!Number.isInteger(amount)){
    //   this.setState({ hidden: false })
    //   console.log('error');
    // } else {
      let finalAmount = toPay(amount)
      console.log(finalAmount);
      this.setState({ hidden: true, finalAmount: finalAmount })
    // }
  }

  render() {
    let { amount } = this.state
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Finplus Pay</h1>
        </header>
        <Container >
          <div className='ui small input'>
            <Label pointing='right' size='small'>Please input the amount: </Label>
            <Divider />
            <input type='text' value={amount} onChange={linkState(this, 'amount')}  onKeyUp= { this.onKeyUp }/>
            <Dropdown icon='question'>
              <Dropdown.Menu>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item onClick={null}>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
