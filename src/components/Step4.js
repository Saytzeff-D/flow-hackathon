import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import Buyer from '../assets/Buyer.png'
import Escrow from '../assets/Escrow.png'
import Seller from '../assets/Seller.png'

const Step4 = ()=>{
    const dispatch = useDispatch()
    const cancel = ()=>{
        dispatch({type: 'changeState', payload: false})
        dispatch({type: 'one', payload: true})
    }

    return (
        <Fragment>
             <div className="d-flex justify-content-between">
                <p className="text-white fw-normal">Waiting for Seller to release LINEA</p>
                <p className="text-step fw-bold">4 out of 4</p>
            </div>
            <div className="p-3 d-flex justify-content-between">
                <div>
                    <div className="border border-dialog p-3 border-2 rounded m-2">
                        <img src={Buyer} />
                    </div>
                    <p className="text-center text-step">Buyer</p>
                </div>
                <div>
                    <div className="border border-dialog p-3 m-2 border-2 rounded">
                        <img src={Escrow} />
                    </div>
                    <p className="text-center text-step">Escrow Services</p>
                </div>
                <div className="">
                    <div className="border border-dialog p-4 seller m-2 border-2 rounded">
                        <img src={Seller} className="" />
                    </div>
                    <p className="text-center text-muted">Seller</p>
                </div>
            </div>
            <div className="my-3">
                <p className="text-dialog fw-lighter fs-7">
                WARNING: Once Escrow the Funds and coin of both parties, Assets would be disbursed accordingly. 
                </p>
            </div>
            <div className="my-2">
                <button onClick={cancel} className="btn px-4 fs-7 btn-cancel mx-1 mb-2">Cancel Order</button>
                <button className="btn px-5 fs-7 btn-buy mx-1 mb-2">Confirm</button>
            </div>
        </Fragment>
    )
}

export default Step4