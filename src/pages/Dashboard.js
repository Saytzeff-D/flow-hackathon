import React, { useState } from "react";
import '../styles/Dashboard.css'
import Heary from '../assets/Heary.png'
import Metamask from '../assets/metamask.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MetaTab from "react-bootstrap/Tab";
import MetaTabs from "react-bootstrap/Tabs";

const Dashboard = ()=>{
    const [value, setValue] = useState('one');
    const [key, setKey] = useState('buy')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="bg-dashboard">
            {/* Banner Box */}
            <div className="bg-banner-box container-fluid">
                <div className="p-3">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <button className="btn btn-dashboard mx-1 rounded-0">
                                <i className="fa fa-user-o" aria-hidden='true'></i> Buyer
                            </button>
                            <button className="btn btn-dashboard mx-1 rounded-0">
                                <i className="fa fa-bell-o"></i>
                            </button>
                            <button className="btn btn-dashboard mx-1 rounded-0">
                                <img className="" src={Metamask} /> Metamask
                            </button>
                        </div>
                    </div>
                    <div className="my-4 banner-box">
                        <div className="row">
                            <div className="col-md-5">
                                <p className="text-white fs-2 p-4">
                                    Exchange your Crypto currencies in minutes into your Local Currency
                                </p>
                                <button className="btn btn-lg btn-banner-box mx-4">
                                    Register as a Seller
                                </button>
                            </div>
                            <div className="col-md-7 d-flex justify-content-end">
                                <img src={Heary} className="img-fluid" alt="heary"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Trade Area */}
            <div className="mx-5">
                <div className="row w-100 mt-3">
                    {/* <Box sx={{ width: '100%' }}> */}
                        <div className="col-2">
                        <MetaTabs variant='pills' className="" activeKey={key} onSelect={(k)=>setKey(k)} >
                            <MetaTab tabClassName='text-tabs' eventKey="buy" title="Buy">
                                <hr />
                                {/* <General /> */}
                            </MetaTab>
                            <MetaTab tabClassName='text-tabs' eventKey="sell" title="Sell">
                                <hr />
                                {/* <Settings /> */}
                            </MetaTab>
                        </MetaTabs>
                        </div>
                        <div className="col-5 text-white">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="secondary tabs example"
                            >
                                <Tab value="one" label="Lin" className="text-tabs" />
                                <Tab value="two" label="Cel" className="text-tabs" />
                                <Tab value="three" label="Sep" className="text-tabs" />
                                <Tab value="four" label="Aval" className="text-tabs" />
                            </Tabs>
                        </div>
                    {/* </Box> */}
                    <div className="col-3 mt-1">
                        <input placeholder="Buyer, Coin, Price" className="form-control bg-search-input border-0 text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard