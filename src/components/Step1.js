import React, { Fragment } from "react";
import '../styles/Procedure.css'
import { useDispatch } from "react-redux";

const Step1 = ()=>{
    const dispatch = useDispatch()

    const cancel =()=>{
        dispatch({type: 'changeState', payload: false})
    }
    const buy = ()=>{
        dispatch({type: 'two', payload: true})
    }
    return(
        <Fragment>
            <div className="d-flex justify-content-between">
                <p className="text-white fw-normal">Purchase Procedure</p>
                <p className="text-step fw-bold">1 out of 3</p>
            </div>
            <div className="me-5 pe-5 mt-4">
                <div className="form-group my-1">
                    <label className="text-white fs-7 fw-lighter">I want to pay</label>
                    <input className="form-control w-100 bg-input rounded-0 border-0" />
                </div>
                <div className="form-group my-3">
                    <label className="text-white fs-7 fw-lighter">I will receive</label>
                    <input className="form-control w-100 bg-input rounded-0 border-0" />
                </div>
                <div className="d-flex justify-content-center mb-5 mt-3">
                    <button onClick={cancel} className="btn px-5 btn-cancel mx-1">Cancel</button>
                    <button onClick={buy} className="btn px-5 btn-buy mx-1">Buy LINEA</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Step1