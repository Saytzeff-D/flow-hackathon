import React, { Fragment } from "react";
import '../styles/Procedure.css'
import { useDispatch } from "react-redux";

const Step2 = ()=>{
    const dispatch = useDispatch()

    const cancel = ()=>{
        dispatch({type: 'changeState', payload: false})
    }
    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <p className="text-white fw-normal">Purchase Procedure</p>
                <p className="text-step fw-bold">2 out of 3</p>
            </div>
            <div>
                <p className="text-dialog fw-normal my-1">
                    Pay to Escrow
                </p>
                <p className="text-dialog fs-8">
                    This medium is to keep every party safe in the transactions
                </p>
            </div>
            <div className="border border-dialog p-3 bg-escrow-wallet rounded">
                <div className="d-flex justify-content-between">
                    <p className="text-dialog fw-lighter fs-7">Escrow Wallet Address</p>
                    <button className="btn text-step"><i className="fa fa-copy"></i> Copy</button>
                </div>
                <p className="text-dialog fs-7">
                    XC009876TTRGGFDTTSFBNJFHGAAKKJGFDYH
                </p>
            </div>
            <div className="my-3">
                <p className="text-white my-0">
                    Payment to be made <span className="text-step">00:14:47</span>
                </p>
                <p className="text-dialog fs-8">
                    Please make a payment within 15:00 mins, otherwise, the order will be cancelled
                </p>
            </div>
            <div className="d-flex justify-content-center my-2">
                <button onClick={cancel} className="btn px-4 fs-7 btn-cancel mx-1">Cancel Order</button>
                <button className="btn px-3 fs-7 btn-buy mx-1">I have made transfer</button>
            </div>
        </Fragment>   
    )
}

export default Step2