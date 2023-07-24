import React, { useState } from "react";
import '../styles/Sellers.css'
import PurchaseProcedure from "./PurchaseProcedure";
import { useDispatch, useSelector } from "react-redux";

const Sellers = ()=>{
    const dispatch = useDispatch()
    const open = useSelector(state=>state.DialogReducer.open)

    const setOpen =(state)=>{
        dispatch({type: 'changeState', payload: state})
    }

    return (
        <div>
            <div className=" mx-md-4 table-responsive-md">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-uppercase fw-lighter">Sellers</th>
                            <th className="text-uppercase fw-lighter">Price</th>
                            <th className="text-uppercase fw-lighter">Limit/Available</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p className="fw-normal lead my-0">Jagunlabi001</p>
                                <p className="fs-7 fw-lighter">392 Orders 95.2% completions</p>
                            </td>
                            <td className="text-purple fw-bold">
                                ₦860.9
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>Available</td>
                                        <td className="px-3 text-white fw-normal">₦860,000.9</td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td className="px-3 text-white fw-normal">₦5000 - 80000</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <button onClick={()=>setOpen(true)} className="btn btn-buy border-0 px-5 fw-less-bold">Buy USDT</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* Dialog Component */}
            </div>
            <PurchaseProcedure open={open} />
        </div>
    )
}

export default Sellers