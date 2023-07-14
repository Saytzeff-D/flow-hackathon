import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import SimpleStore_abi from '../cadance/scripts/simpleAbi.json'

const Ethereum = ()=>{
    const contractAddr = '0x98C34950E679b1F7f3c8f2ED5Db2b580373e8536'
    const [error, setError] = useState()
    const [defaultAccount, setDefaultAccount] = useState()
    const [userBal, setUserBal] = useState()
    const [provider, setProvider] = useState()
    const [signer, setSigner] = useState()
    const [contract, setContract] = useState()
    const [currentContractVal, setCurrentContractVal] = useState()

    const connectWallet = ()=>{
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'}).then(result=>{
                accountChanged([result[0]])
            }).catch(err=>{
                setError(err.message)
            })
        } else{
            console.log('Install Metamask')
        }
    }
    // eth_sendTransaction is the method for sending transactions
    const accountChanged = (accountName)=>{
        setDefaultAccount(accountName)
        getUserBal(accountName)
        updateEthers()
    }
    const getUserBal = (acctAddr)=>{
        window.ethereum.request({method: 'eth_getBalance', params: [String(acctAddr), 'latest']}).then(bal=>{
            setUserBal(ethers.formatEther(bal))
        })
    }
    const updateEthers = ()=>{
        let tempProvider =  new ethers.BrowserProvider(window.ethereum)
        setProvider(tempProvider)
        let tempSigner = tempProvider.getSigner()
        let tempContract = new ethers.Contract(contractAddr, SimpleStore_abi ,tempSigner)
        setContract(tempContract)
    }
    const getCurrentVal = async ()=>{
        await contract.Get().then(val=>{
            setCurrentContractVal(val)
        }).catch(err=> console.log(err))
    }
    const setVal = async (event)=>{
        event.preventDefault()
        await contract.Set(event.target.setText.value).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div>
            <h1>Ethereum Test</h1>
            <h1>Address: {defaultAccount}</h1>
            <h1>Balance: {userBal}</h1>
            <form onSubmit={setVal}>
                <input id="setText" />
                <button type="submit">Set Contract</button>
            </form>
            <button onClick={connectWallet}>Connect</button>
            <button onClick={getCurrentVal}>Current Value</button>
            {currentContractVal}
            {error}
        </div>
    )
}

export default Ethereum