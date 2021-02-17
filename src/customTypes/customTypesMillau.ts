// Copyright 2019-2020 @paritytech/bridge-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable sort-keys */

export default {
  Address: 'AccountId',
  LookupSource: 'AccountId',
  MillauBlockHash: 'H512',
  MillauBlockNumber: 'u64',
  RialtoBlockHash: 'H256',
  RialtoBlockNumber: 'u32',
  RialtoHeader: {
    parent_Hash: 'RialtoBlockHash',
    number: 'Compact<RialtoBlockNumber>',
    state_root: 'RialtoBlockHash',
    extrinsics_root: 'RialtoBlockHash',
    digest: 'RialtoDigest'
  },
  RialtoDigest: {
    logs: 'Vec<RialtoDigestItem>'
  },
  RialtoDigestItem: {
    _enum: {
      Other: 'Vec<u8>',
      AuthoritiesChange: 'Vec<AuthorityId>',
      ChangesTrieRoot: 'RialtoBlockHash',
      SealV0: 'SealV0',
      Consensus: 'Consensus',
      Seal: 'Seal',
      PreRuntime: 'PreRuntime'
    }
  },
  '---': {},
  BlockHash: 'RialtoBlockHash',
  BlockNumber: 'RialtoBlockNumber',
  BridgedBlockHash: 'RialtoBlockHash',
  BridgedBlockNumber: 'RialtoBlockNumber',
  BridgedHeader: 'RialtoHeader',
  '---2': {},
  ImportedHeader: {
    header: 'BridgedHeader',
    requires_justification: 'bool',
    is_finalized: 'bool',
    signal_hash: 'Option<BridgedBlockHash>'
  },
  AuthoritySet: {
    authorities: 'AuthorityList',
    set_id: 'SetId'
  },
  RelayerId: 'AccountId',
  Id: '[u8; 4]',
  InstanceId: 'Id',
  LaneId: 'Id',
  MessageNonce: 'u64',
  MessageId: '(Id, u64)',
  MessageKey: {
    lane_id: 'LaneId',
    'nonce:': 'MessageNonce'
  },
  InboundRelayer: 'AccountId',
  InboundLaneData: {
    relayers: 'Vec<(MessageNonce, MessageNonce, RelayerId)>',
    last_confirmed_nonce: 'MessageNonce'
  },
  OutboundLaneData: {
    latest_generated_nonce: 'MessageNonce',
    latest_received_nonce: 'MessageNonce',
    oldest_unpruned_nonce: 'MessageNonce'
  },
  MessageData: {
    payload: 'MessagePayload',
    fee: 'Balance'
  },
  MessagePayload: 'Vec<u8>',
  OutboundMessageFee: 'u64',
  OutboundPayload: {
    call: 'Vec<u8>',
    origin: 'CallOrigin',
    spec_version: 'u32',
    weight: 'Weight'
  },
  CallOrigin: {
    _enum: {
      SourceRoot: '()',
      TargetAccount: '([u8;33], MultiSigner,MultiSignature)',
      SourceAccount: '[u8;33]'
    }
  },
  MultiSigner: {
    _enum: {
      Ed25519: 'H256',
      Sr25519: 'H256',
      Ecdsa: '[u8;33]'
    }
  },
  MultiSignature: {
    _enum: {
      Ed25519: 'H512',
      Sr25519: 'H512',
      Ecdsa: '[u8;65]'
    }
  }
};
