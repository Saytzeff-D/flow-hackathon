import React, { Fragment } from "react";
import { useDispatch } from "react-redux";

const Step3 =()=>{
    const dispatch = useDispatch()
    const cancel = ()=>{
        dispatch({type: 'changeState', payload: false})
        dispatch({type: 'one', payload: true})
    }
    const proceed = ()=>{
        dispatch({type: 'four', payload: true})
    }

    return(
        <Fragment>
            <div className="d-flex justify-content-between">
                <p className="text-white fw-normal">Confirm Successful Payment</p>
                <p className="text-step fw-bold">3 out of 4</p>
            </div>
            <div>
                <p className="text-dialog fs-8 mt-1 mb-3">
                    Please confirm that payment has been made to the Escro wallet address. Malicious clicks willl lead to deactivation of accounts.
                </p>
            </div>
            <div className="border border-dialog p-3 bg-escrow-wallet rounded">
                <div className="d-flex justify-content-between">
                    <p className="text-dialog fw-lighter fs-7">Escrow Wallet Address</p>
                    <button className="btn text-step"><i className="fa fa-copy"></i> Copy</button>
                </div>
                <p className="text-dialog fs-7 overflow-auto">
                    XC009876TTRGGFDTTSFBNJFHGAAKKJGFDYH
                </p>
            </div>
            <div className="my-3">
                <p className="text-dialog fs-8">
                    WARNING:If you click on “i have made transfer “ without making the payment ( you need to transfer the money / coin to the escro wallet address). 
                </p>
            </div>
            <div className="d-flex flex-md-row flex-column justify-content-center mt-5 mb-3">
                <button onClick={cancel} className="btn px-4 fs-7 btn-cancel mx-1 mb-2">Cancel Order</button>
                <button onClick={proceed} className="btn px-5 fs-7 btn-buy mx-1 mb-2">Confirm</button>
            </div>
        </Fragment>
    )
}

export default Step3