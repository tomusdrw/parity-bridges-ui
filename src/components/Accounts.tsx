// Copyright 2021 Parity Technologies (UK) Ltd.
// This file is part of Parity Bridges UI.
//
// Parity Bridges UI is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Parity Bridges UI is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Parity Bridges UI.  If not, see <http://www.gnu.org/licenses/>.

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { encodeAddress } from '@polkadot/util-crypto';
import React, { useEffect, useState } from 'react';

import { useSourceTarget } from '../contexts/SourceTargetContextProvider';
import useAccounts from '../hooks/useAccounts';
import formatAccounts from '../util/formatAccounts';
import getChainSS58 from '../util/getSS58';
import Account from './Account';
import SubHeader from './SubHeader';

export const Accounts = () => {
  const [chains, setChains] = useState<Array<string>>([]);
  const { account, accounts, derivedAccount, setCurrentAccount } = useAccounts();
  const {
    sourceChainDetails: { sourceChain },
    targetChainDetails: { targetChain }
  } = useSourceTarget();

  useEffect(() => {
    if (!chains.length) {
      setChains([sourceChain, targetChain]);
    }
  }, [chains.length, sourceChain, targetChain]);

  const value = account ? encodeAddress(account.address, getChainSS58(sourceChain)) : '';

  const onChange = (value: string, chain: string) => {
    setCurrentAccount(value, chain);
  };
  const renderAccounts = (chain: string) => {
    const formatedAccounts = formatAccounts(accounts, chain);
    const items = formatedAccounts.map(({ text, value, key }: any) => (
      <MenuItem
        key={key}
        value={value}
        onClick={() => {
          onChange(value, chain);
        }}
      >
        <Account name={text} value={value} showDerivedBalance chain={chain} />
      </MenuItem>
    ));
    return [<SubHeader key={chain} chain={chain} />, items];
  };

  const AccountSelected = () => {
    if (account) {
      const name = (account.meta.name as string).toLocaleUpperCase();
      return <Account name={name} value={value} />;
    }
    return null;
  };

  return (
    <>
      <FormControl variant="outlined" className="formControl" fullWidth>
        <InputLabel shrink={false}>From: {sourceChain} Account</InputLabel>
        <Select value={value} renderValue={(): React.ReactNode => <AccountSelected />}>
          {chains.map((chain) => renderAccounts(chain))}
        </Select>
      </FormControl>
      {derivedAccount && <Account value={derivedAccount} />}
    </>
  );
};
