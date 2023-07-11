import React from "react";
import SignInBg from '../assets/Group 4.png'
import Buy from '../assets/send-sqaure-2.png'
import Sell from '../assets/receive-square-2.jpg'
import '../styles/SignIn.css'
import * as fcl from '@onflow/fcl';
import * as types from '@onflow/types'

fcl.config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn')

const SignIn = ()=>{
    const buyToken = ()=>{
        fcl.authenticate().then(user=>{
            console.log(user)
        })
    }
    return(
        <>
            <div className="bg-signin">
                <div className="d-flex justify-content-center px-5">
                    <img className="mt-4 img-fluid mx-5" src={SignInBg} />
                </div>
                <div className="d-flex flex-md-row flex-column justify-content-center py-3 mt-1">
                    <button onClick={buyToken} className="btn btn-purple px-5 fw-bold mx-2 mb-md-0 mb-3"> <img src={Buy} /> Buy Token</button>
                    <button className="btn px-5 btn-outline-purple fw-bold mx-2 mb-md-0 mb-3">Sell Token</button>
                </div>
            </div>
        </>
    )
}

export default SignIn