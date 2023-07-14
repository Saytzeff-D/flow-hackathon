import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import contractABI from '../cadance/scripts/simpleAbi.json'

const ContractInteraction = () => {
  const [contract, setContract] = useState(null);
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  const [defaultAccount, setDefaultAccount] = useState()

  useEffect(() => {
    const initializeContract = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();

        const contractAddress = '0x98C34950E679b1F7f3c8f2ED5Db2b580373e8536';

        const deployedContract = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(deployedContract);
      } catch (error) {
        console.error(error);
      }
    };

    initializeContract();
  }, []);

  const handleSet = async () => {
    try {
      await contract.Set(newName);
      const updatedName = await contract.Get();
      setName(updatedName);
      setNewName('');
    } catch (error) {
      console.error(error);
    }
  };

const connectWallet = ()=>{
    if(window.ethereum){
        window.ethereum.request({method: 'eth_requestAccounts'}).then(result=>{
            setDefaultAccount([result[0]])
        }).catch(err=>{
            console.log(err.message)
        })
    } else{
        console.log('Install Metamask')
    }
}
  return (
    <div>
        <h1>Account: {defaultAccount}</h1>
        <button onClick={connectWallet}>Connect</button>
      <div>
        <label>Current Name: {name}</label>
      </div>

      <div>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <button onClick={handleSet}>Set Name</button>
      </div>
    </div>
  );
};

export default ContractInteraction;