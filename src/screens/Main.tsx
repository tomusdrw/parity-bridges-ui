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

import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Icon } from 'semantic-ui-react';

import { Accounts, BoxMain, BoxSidebar, BoxUI, MenuAction, MenuActionMockData } from '../components';
import CustomCall from '../components/CustomCall';
import DashboardCard from '../components/DashboardCard';
import ExtensionAccountCheck from '../components/ExtensionAccountCheck';
import Remark from '../components/Remark';
import SnackBar from '../components/SnackBar';
import Transactions from '../components/Transactions';
import Transfer from '../components/Transfer';
import { useSourceTarget } from '../contexts/SourceTargetContextProvider';
import { ChainDetails } from '../types/sourceTargetTypes';

interface Props {
  className?: string;
}

function Main({ className }: Props) {
  const { sourceChainDetails, targetChainDetails } = useSourceTarget();

  return (
    <BoxMain>
      <BoxSidebar>{`${sourceChainDetails.sourceChain} => ${targetChainDetails.targetChain}`}</BoxSidebar>
      <BoxUI>
        <MenuAction items={MenuActionMockData} />
        <Container className={className}>
          <Grid container alignItems="center">
            <Grid item md={5}>
              <DashboardCard chainDetail={ChainDetails.SOURCE} />
            </Grid>
            <Grid item>
              <Icon fitted name="exchange" />
            </Grid>
            <Grid item md={5}>
              <DashboardCard chainDetail={ChainDetails.TARGET} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12}>
              <Accounts />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12}>
              <Remark />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12}>
              <Transfer />
              <ExtensionAccountCheck component={<Accounts />} />
            </Grid>
            <Grid container>
              <Grid item md={12}>
                <CustomCall />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={12}>
                <Transactions />
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <SnackBar />
      </BoxUI>
    </BoxMain>
  );
}
export default Main;
