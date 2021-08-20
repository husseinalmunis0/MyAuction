const MyAuction = artifacts.require("MyAuction");
const TutorialToken = artifacts.require("TutorialToken");
const Auctions = artifacts.require("Auctions");

module.exports = function(deployer) {
  deployer.deploy(MyAuction);
  deployer.deploy(TutorialToken);
  deployer.deploy(Auctions);
};
