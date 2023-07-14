import React from "react";
import SignInBg from '../assets/Group 4.png'
import Buy from '../assets/send-sqaure-2.png'
import Sell from '../assets/receive-square-2.jpg'
import '../styles/SignIn.css'

const SignIn = ()=>{
    const buyToken = ()=>{
       
    }
    return(
        <>
            <div className="bg-signin box-signin">
                <div className="d-flex justify-content-center px-5">
                    <img className="mt-4 img-fluid mx-5 h-100" src={SignInBg} />
                </div>
                <div className="d-flex justify-content-center token-btn py-4">
                    <button onClick={buyToken} className="btn btn-purple px-md-5 fw-bold mx-2 mb-md-0 mb-3">Sell Token</button>
                    <button className="btn px-md-5 btn-outline-purple fw-bold mx-2 mb-md-0 mb-3">Be a Merchant</button>
                </div>
            </div>
        </>
    )
}

export default SignIn