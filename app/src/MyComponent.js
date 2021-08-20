import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";
const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div>
        <img src={logo} alt="drizzle-logo" />
        <h1>Drizzle Examples</h1>
        <h2>Active Account</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
          {/*<ContractData*/}
          {/*  drizzle={drizzle}*/}
          {/*  drizzleState={drizzleState}*/}
          {/*  contract="Auctions"*/}
          {/*  method="createAuction"*/}
          {/*/>*/}
        <ContractForm drizzle={drizzle}  contract="Auctions" method="createAuction"
                      methodArgs={[{value: 1000000},{from: drizzleState.accounts[drizzleState.accountIndex]}]}
        />

      </div>
    </div>
  );
};
