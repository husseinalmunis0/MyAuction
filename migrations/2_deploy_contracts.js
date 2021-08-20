const MyAuction = artifacts.require("MyAuction");
const Auctions = artifacts.require("Auctions");

module.exports = function(deployer) {
  deployer.deploy(MyAuction);
  deployer.deploy(Auctions);
};
