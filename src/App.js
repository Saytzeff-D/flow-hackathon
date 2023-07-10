import React from 'react';
import './App.css';
import * as fcl from '@onflow/fcl'
import * as types from '@onflow/types'
import { getGreeting } from './cadance/scripts/getGreeting';

// 0xde3de6a3c08d0f66
fcl.config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn')
function App() {

  const clickGreeting = async ()=>{
    const result = await fcl.send([
      fcl.script(getGreeting)
    ]).then(
      fcl.decode
    )
    console.log(result)
  }

  return (
    <div className="App">
      <h1>Flow Hackathon</h1>
      <button onClick={clickGreeting}>Get Greeting</button>
    </div>
  );
}

export default App;
