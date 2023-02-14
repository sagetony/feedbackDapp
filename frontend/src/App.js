import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../src/components/Header";
import Feedback from "../src/components/Feedback";
import FeedbackData from "../src/components/FeedbackData";
import feedbackAbi from "../src/abis/contractsData/Feedback.json";
import feedbackAddress from "../src/abis/contractsData/Feedback-address.json";
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";

function App() {
  const [feedback, setFeedback] = useState(null);
  const [account, setAccount] = useState(null);

  const Webhandler = useCallback(async () => {
    if (window.ethereum) {
      console.log("Ethereum support is available");
      if (window.ethereum.isMetaMask) {
        console.log("MetaMask is active");
        // get the account in metamask
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        // // Get the provider from Metamask
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // Get Signer
        const signer = provider.getSigner();
        // Helps Changes account when user switch accounts
        window.ethereum.on("accountsChanged", async function (accounts) {
          setAccount(account[0]);
          await Webhandler();
        });
        //  Get Contracts
        const feedbacks = new ethers.Contract(
          feedbackAddress.address,
          feedbackAbi.abi,
          signer
        );
        setFeedback(feedbacks);
      } else {
        alert("MetaMask is not available");
      }
    } else {
      console.log("Ethereum support is not found");
    }
  }, [account]);
  useEffect(() => {
    Webhandler();
  }, [Webhandler]);

  return (
    <div className="App">
      <Header account={account} Webhandler={Webhandler} />
      <Feedback feedback={feedback} />
      <FeedbackData feedback={feedback} />
    </div>
  );
}

export default App;
