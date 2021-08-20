import Web3 from "web3";
import Auctions from "./contracts/Auctions.json";
import MyAuction from "./contracts/MyAuction.json";


const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545"),
  },
  contracts: [MyAuction, Auctions],
  events: {
    Auctions: ["AuctionCreated"],
  },
};

export default options;
