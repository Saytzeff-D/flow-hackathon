import React, { useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import '../styles/Procedure.css'
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useSelector } from "react-redux";
import Step3 from "./Step3";
import Step4 from "./Step4";

const PurchaseProcedure = (props)=>{
    const { open } = props
    const one = useSelector(state=>state.DialogReducer.one)
    const two = useSelector(state=>state.DialogReducer.two)
    const three = useSelector(state=>state.DialogReducer.three)
    const four = useSelector(state=>state.DialogReducer.four)

    return (
        <div className="">
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                maxWidth={'md'}
            >
                <DialogContent className="bg-dialog rounded-0">
                <DialogContentText id="alert-dialog-description">
                <div className="row w-100">
                    <div className="col-md-7">
                        {
                            one
                            ?
                            <Step1 />
                            :
                            two
                            ?
                            <Step2 />
                            :
                            three
                            ?
                            <Step3 />
                            :
                            four
                            ?
                            <Step4 />
                            :
                            ''
                        }
                    </div>
                    <div className="col-md-5 border-start border-dialog d-none d-md-block">
                        <p className="fw-normal text-dialog">
                            Jagunlabi001
                            <span className="fs-8 fw-lighter px-4 text-dialog">392 Orders 95.2% completions</span>
                        </p>
                        <div>
                            <table className="table fs-7">
                                <tr>
                                    <td>Price</td>
                                    <td className="text-step">₦860.9</td>
                                </tr>
                                <tr>
                                    <td>Payment Time Limits</td>
                                    <td className="text-step">30 minutes</td>
                                </tr>
                                <tr>
                                    <td>Available</td>
                                    <td className="text-step">₦860,00.9</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <p className="text-dialog fw-normal my-1">
                                Terms and Conditions
                            </p>
                            <p className="text-dialog fs-8">
                                Please kindly to all deals as fast as possible no scam zone
                            </p>
                        </div>
                    </div>
                </div>
                </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PurchaseProcedure