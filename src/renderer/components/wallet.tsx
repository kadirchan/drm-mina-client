import React, { useState } from 'react';

function walletForm() {
  const [mnemonic, setMnemonic] = useState([]);

  const handleInputs = (e: any) => {};

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(mnemonic);
  };

  return (
    <form onSubmit={handleSubmit}>
      {mnemonic.map((word: string, index: number) => {
        return (
          <div key={index}>
            <input type="text" value={word} onChange={handleInputs} />
          </div>
        );
      })}
    </form>
  );
}

function WalletComponent() {
  return (
    <div>
      <h1>Recover Wallet</h1>
    </div>
  );
}

const Wallet = () => {
  return <WalletComponent />;
};

export default Wallet;
