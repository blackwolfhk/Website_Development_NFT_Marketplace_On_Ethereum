import React, {useState, useEffect, useContext} from 'react'
import Web3Modal from "web3modal";
import {ethers} from "ethers";
import Router from "next/router";
import axios from "axios";
import {create as ipfsHttpClient} from "ipfs-http-client";

const client = ipfsHttpClient("https:ipfs.infura.io:5001/api/v0") // only for demo purpose

// INTERNAL IMPORT
import {NFTMarketplaceAddress, NFTMarketplaceABI} from "./constants"

// FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) => 
new ethers.Contract(
    NFTMarketplaceAddress, 
    NFTMarketplaceABI, 
    signerOrProvider
    );

// CONNECTING WITH SMART CONTRACT

const connectingWithSmartContract = async() => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log("Something went wrong while connecting with contract");
    }
};

export const NFTMarketplaceContext = React.createContext();



export const NFTMarketplaceProvider = (({children})=>{
    const titleData = "Discover, collect, and sell NFTs";

    // USESTATE
    const [currentAccount, setCurrentAccount] = useState("");

    // CHECK IF WALLET IS CONNECTED
    const checkIfWalletConnected = async() => {
        try {
            if(!window.ethereum) return console.log("Install MetaMask");

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            })

            if(accounts.length){
                setCurrentAccount(accounts[0])
            } else {
                console.log("No Account Found")
            }
        } catch (error) {
            console.log("Something wrong while connecting to wallet")
        }
    };

    // CONNECT WALLET FUNCTION
    const connectWallet = async() => {
        try {
            if(!window.ethereum) return console.log("Install MetaMask");

            const accounts = await window.ethereum.request({
                method: "eth_requestAccount",
            })

            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log("Error while connecting to wallet")
        }
    }

    // UPLOAD TO IPFS FUNCTION
    const uploadToIPFS = async(file) => {
        try {
            const added = await client.add({content: file});
            const url = `https://ipfs.infura.io/ipfs/${added.path}`; // for dema & learning purpose only
            return url;
        } catch (error) {
            console.log("Error Uploading to FPFS")
        }
    }

    return (
        <NFTMarketplaceContext.Provider 
        value = {{
            checkIfWalletConnected,
            connectWallet,
            titleData,
            }}
        >
            {children}
        </NFTMarketplaceContext.Provider>
    )
})