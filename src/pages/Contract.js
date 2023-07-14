import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import CONTRACT_ABI from '../cadance/scripts/simpleAbi.json';

const ContractInteraction = () => {
  const [contract, setContract] = useState();
  const [contractData, setContractData] = useState('');
  const [chainIDData, setChainID] = useState('loading');
  const [connectedWallet, setConnectedWallet] = useState();
  const contractAddress = '0x7f7fD6537daFf9e87015D61F8aBe320099d93197';

  useEffect(() => {
    initializeContract();
  }, []);

  const initializeContract = async () => {
    try {
      // Check if MetaMask is available and connected
      // if (typeof window.ethereum !== 'undefined' && window.ethereum.isConnected()) {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId();
        setChainID(networkId);
        // Create an instance of the contract
        const contractInstance = new web3.eth.Contract(
          CONTRACT_ABI, // Replace CONTRACT_ABI with the ABI of your contract
          contractAddress
        );
        setContract(contractInstance);
        setConnectedWallet(web3.eth.defaultAccount);
      // } else {
      //   console.log('Please install MetaMask or connect your wallet.');
      // }
    } catch (error) {
      console.log('Error initializing contract:', error);
    }
  };

  const handleConnectWallet = async () => {
    if(window.ethereum){
      window.ethereum.request({method: 'eth_requestAccounts'}).then(result=>{
          setConnectedWallet([result[0]])
      }).catch(err=>{
          console.log(err.message)
      })
  } else{
      console.log('Install Metamask')
  }
  };

  const fetchDataFromContract = async () => {
    try {
      // Call a function from the contract
      const data = await contract.methods.Get().call();
      setContractData(data);
    } catch (error) {
      console.log('Error fetching data from contract:', error);
    }
  };

  const handleSet = async (e) => {
    e.preventDefault()
    try {
      // Send a transaction to the contract
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const receipt = await contract.methods.SetName(contractData).send({ from: accounts[0] });
      console.log(accounts, receipt)
      if (receipt.transactionHash) {
        fetchDataFromContract();
      } else {
        console.log('Transaction failure')
        // Handle transaction failure
      }
    } catch (error) {
      console.log('Error sending transaction to the contract:', error);
    }
  };

  return (
    <div>
      <h1>Account: {connectedWallet}</h1>
      <p>chainID:{chainIDData}</p>
      <button onClick={handleConnectWallet}>Connect</button>
      <button onClick={fetchDataFromContract}>Fetch Data</button>
      <div>
        <label>Current Name: {contractData}</label>
      </div>
      <form onSubmit={handleSet}>
        <input id="setText" />
        <button type="submit">Set Name</button>
    </form>
    </div>
  );
};

export default ContractInteraction;