import React, { useState } from 'react';
import './App.css';
import * as fcl from '@onflow/fcl'
import * as types from '@onflow/types'
import { getGreeting } from './cadance/scripts/getGreeting';
import { changeGreeting } from './cadance/transactions/changeGreeting';

// 0xde3de6a3c08d0f66
fcl.config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn')
function App() {

  const [user, setUser] = useState()
  const clickGreeting = async ()=>{
    const result = await fcl.send([
      fcl.script(getGreeting)
    ]).then(
      fcl.decode
    )
    console.log(result)
  }
  const login = ()=>{
    fcl.authenticate()
    fcl.currentUser().subscribe(setUser)
  }
  const changeTheGreeting = async ()=>{
    const transactionId = await fcl.send([
      fcl.transaction(changeGreeting),
      fcl.args([
        fcl.arg("Goodbye!", types.String)
      ]),
      fcl.payer(fcl.authz),
      fcl.proposer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(9999)
    ]).then(fcl.decode)

    console.log(transactionId)
  }

  return (
    <div className="App">
      <h1>Flow Hackathon</h1>
      <h1>Account Address: {user && user.addr ? user.addr: ''}</h1>
      <button onClick={clickGreeting}>Get Greeting</button>
      <button onClick={changeTheGreeting}>Change The Greeting</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
