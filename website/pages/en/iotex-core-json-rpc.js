const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const idl = [
  {
    "type": "comment",
    "value": "Copyright (c) 2018 IoTeX\nThis is an alpha (internal) release and is not suitable for production. This source code is provided 'as is' and no\nwarranties are given as to title or non-infringement, merchantability or fitness for purpose and, to the extent\npermitted by law, all liability for your use of the code is disclaimed. This source code is governed by Apache\nLicense 2.0 that can be found in the LICENSE file."
  },
  {
    "type": "comment",
    "value": "To compile this file:\n1. Install the barrister translator (IDL -> JSON)\nyou need to be root (or use sudo)\npip install barrister"
  },
  {
    "type": "comment",
    "value": "2. Install barrister-go\ngo get github.com/coopernurse/barrister-go\ngo install github.com/coopernurse/barrister-go/idl2go"
  },
  {
    "type": "comment",
    "value": "3. barrister explorer.idl | $GOPATH/bin/idl2go -i -p explorer"
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "CoinStatistic",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "height"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "supply"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "transfers"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "votes"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "executions"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "aps"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "BlockGenerator",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "name"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "address"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "Block",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "ID"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "height"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "timestamp"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "transfers"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "votes"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "executions"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "BlockGenerator",
        "name": "generateBy"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "amount"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "forged"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "size"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "Transfer",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "version"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "ID"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "nonce"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "sender"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "recipient"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "amount"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "senderPubKey"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "signature"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "payload"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "gasLimit"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "gasPrice"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "bool",
        "name": "isCoinbase"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "fee"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "timestamp"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "blockID"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "bool",
        "name": "isPending"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "Execution",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "version"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "ID"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "nonce"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "executor"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "contract"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "amount"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "executorPubKey"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "signature"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "gasLimit"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "gasPrice"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "timestamp"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "data"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "blockID"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "bool",
        "name": "isPending"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "Log",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "address"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": true,
        "type": "string",
        "name": "topics"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "data"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "blockNumber"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "txnHash"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "blockHash"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "index"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "Receipt",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "returnValue"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "status"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "hash"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "gasConsumed"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "contractAddress"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": true,
        "type": "Log",
        "name": "logs"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "SendExecutionResponse",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "Receipt",
        "name": "receipt"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "Vote",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "version"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "ID"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "nonce"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "timestamp"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "voter"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "votee"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "voterPubKey"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "gasLimit"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "gasPrice"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "signature"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "blockID"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "bool",
        "name": "isPending"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "AddressDetails",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "address"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "totalBalance"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "nonce"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "pendingNonce"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "bool",
        "name": "isCandidate"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "Candidate",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "address"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "pubKey"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "totalVote"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "creationHeight"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "lastUpdateHeight"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "bool",
        "name": "isDelegate"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "bool",
        "name": "isProducer"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "CandidateMetrics",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": true,
        "type": "Candidate",
        "name": "candidates"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "latestEpoch"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "latestHeight"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "ConsensusMetrics",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "latestEpoch"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": true,
        "type": "string",
        "name": "latestDelegates"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "latestBlockProducer"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": true,
        "type": "string",
        "name": "candidates"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "SendTransferRequest",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "version"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "nonce"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "sender"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "recipient"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "amount"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "senderPubKey"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "signature"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "payload"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "gasLimit"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "gasPrice"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "bool",
        "name": "isCoinbase"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "SendTransferResponse",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "hash"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "SendVoteRequest",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "version"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "nonce"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "voter"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "votee"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "voterPubKey"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "gasLimit"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "gasPrice"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "signature"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "SendVoteResponse",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "hash"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "PutSubChainBlockMerkelRoot",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "name"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "value"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "PutSubChainBlockRequest",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "version"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "nonce"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "senderAddress"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "subChainAddress"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "height"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": true,
        "type": "PutSubChainBlockMerkelRoot",
        "name": "roots"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "senderPubKey"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "signature"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "int",
        "name": "gasLimit"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "gasPrice"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "PutSubChainBlockResponse",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "hash"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "Node",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "address"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "GetPeersResponse",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "Node",
        "name": "Self"
      },
      {
        "comment": "",
        "optional": false,
        "is_array": true,
        "type": "Node",
        "name": "Peers"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "SendSmartContractResponse",
    "fields": [
      {
        "comment": "",
        "optional": false,
        "is_array": false,
        "type": "string",
        "name": "hash"
      }
    ]
  },
  {
    "comment": "",
    "extends": "",
    "type": "struct",
    "name": "GetBlkOrActResponse",
    "fields": [
      {
        "comment": "",
        "optional": true,
        "is_array": false,
        "type": "Block",
        "name": "block"
      },
      {
        "comment": "",
        "optional": true,
        "is_array": false,
        "type": "Transfer",
        "name": "transfer"
      },
      {
        "comment": "",
        "optional": true,
        "is_array": false,
        "type": "Vote",
        "name": "vote"
      },
      {
        "comment": "",
        "optional": true,
        "is_array": false,
        "type": "Execution",
        "name": "execution"
      }
    ]
  },
  {
    "comment": "",
    "functions": [
      {
        "comment": "get the blockchain tip height",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "int"
        },
        "params": [],
        "name": "getBlockchainHeight"
      },
      {
        "comment": "get the balance of an address",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "string"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "address"
          }
        ],
        "name": "getAddressBalance"
      },
      {
        "comment": "get the address detail of an iotex address",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "AddressDetails"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "address"
          }
        ],
        "name": "getAddressDetails"
      },
      {
        "comment": "get list of transfers by start block height, transfer offset and limit",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Transfer"
        },
        "params": [
          {
            "is_array": false,
            "type": "int",
            "name": "startBlockHeight"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          },
          {
            "is_array": false,
            "type": "bool",
            "name": "showCoinBase"
          }
        ],
        "name": "getLastTransfersByRange"
      },
      {
        "comment": "get transfers from transaction id",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "Transfer"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "transferID"
          }
        ],
        "name": "getTransferByID"
      },
      {
        "comment": "get list of transfers belonging to an address",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Transfer"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "address"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getTransfersByAddress"
      },
      {
        "comment": "get list of unconfirmed transfers in actpool belonging to an address",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Transfer"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "address"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getUnconfirmedTransfersByAddress"
      },
      {
        "comment": "get all transfers in a block",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Transfer"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "blkID"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getTransfersByBlockID"
      },
      {
        "comment": "get list of votes by start block height, vote offset and limit",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Vote"
        },
        "params": [
          {
            "is_array": false,
            "type": "int",
            "name": "startBlockHeight"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getLastVotesByRange"
      },
      {
        "comment": "get vote from vote id",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "Vote"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "voteID"
          }
        ],
        "name": "getVoteByID"
      },
      {
        "comment": "get list of votes belonging to an address",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Vote"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "address"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getVotesByAddress"
      },
      {
        "comment": "get list of unconfirmed votes in actpool belonging to an address",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Vote"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "address"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getUnconfirmedVotesByAddress"
      },
      {
        "comment": "get all votes in a block",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Vote"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "blkID"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getVotesByBlockID"
      },
      {
        "comment": "get list of executions by start block height, execution offset and limit",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Execution"
        },
        "params": [
          {
            "is_array": false,
            "type": "int",
            "name": "startBlockHeight"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getLastExecutionsByRange"
      },
      {
        "comment": "get execution from execution id",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "Execution"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "executionID"
          }
        ],
        "name": "getExecutionByID"
      },
      {
        "comment": "get list of executions belonging to an address",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Execution"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "address"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getExecutionsByAddress"
      },
      {
        "comment": "get list of unconfirmed executions in actpool belonging to an address",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Execution"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "address"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getUnconfirmedExecutionsByAddress"
      },
      {
        "comment": "get all executions in a block",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Execution"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "blkID"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getExecutionsByBlockID"
      },
      {
        "comment": "get list of blocks by block id offset and limit",
        "returns": {
          "optional": false,
          "is_array": true,
          "type": "Block"
        },
        "params": [
          {
            "is_array": false,
            "type": "int",
            "name": "offset"
          },
          {
            "is_array": false,
            "type": "int",
            "name": "limit"
          }
        ],
        "name": "getLastBlocksByRange"
      },
      {
        "comment": "get block by block id",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "Block"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "blkID"
          }
        ],
        "name": "getBlockByID"
      },
      {
        "comment": "get statistic of iotx",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "CoinStatistic"
        },
        "params": [],
        "name": "getCoinStatistic"
      },
      {
        "comment": "get consensus metrics",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "ConsensusMetrics"
        },
        "params": [],
        "name": "getConsensusMetrics"
      },
      {
        "comment": "get candidates metrics",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "CandidateMetrics"
        },
        "params": [],
        "name": "getCandidateMetrics"
      },
      {
        "comment": "get candidates metrics at given height",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "CandidateMetrics"
        },
        "params": [
          {
            "is_array": false,
            "type": "int",
            "name": "h"
          }
        ],
        "name": "getCandidateMetricsByHeight"
      },
      {
        "comment": "send transfer",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "SendTransferResponse"
        },
        "params": [
          {
            "is_array": false,
            "type": "SendTransferRequest",
            "name": "request"
          }
        ],
        "name": "sendTransfer"
      },
      {
        "comment": "send vote",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "SendVoteResponse"
        },
        "params": [
          {
            "is_array": false,
            "type": "SendVoteRequest",
            "name": "request"
          }
        ],
        "name": "sendVote"
      },
      {
        "comment": "sendSmartContract",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "SendSmartContractResponse"
        },
        "params": [
          {
            "is_array": false,
            "type": "Execution",
            "name": "request"
          }
        ],
        "name": "sendSmartContract"
      },
      {
        "comment": "putSubChainBlock",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "PutSubChainBlockResponse"
        },
        "params": [
          {
            "is_array": false,
            "type": "PutSubChainBlockRequest",
            "name": "request"
          }
        ],
        "name": "putSubChainBlock"
      },
      {
        "comment": "get list of peers",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "GetPeersResponse"
        },
        "params": [],
        "name": "getPeers"
      },
      {
        "comment": "get receipt by execution id",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "Receipt"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "id"
          }
        ],
        "name": "getReceiptByExecutionID"
      },
      {
        "comment": "read execution state",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "string"
        },
        "params": [
          {
            "is_array": false,
            "type": "Execution",
            "name": "request"
          }
        ],
        "name": "readExecutionState"
      },
      {
        "comment": "get block or action by a hash",
        "returns": {
          "optional": false,
          "is_array": false,
          "type": "GetBlkOrActResponse"
        },
        "params": [
          {
            "is_array": false,
            "type": "string",
            "name": "hashStr"
          }
        ],
        "name": "getBlockOrActionByHash"
      }
    ],
    "type": "interface",
    "name": "Explorer"
  },
  {
    "barrister_version": "0.1.6",
    "type": "meta",
    "date_generated": 1540708284952,
    "checksum": "b31208a5095f3df5b87062e21a5f1283"
  }
];

const MarkdownBlock = CompLibrary.MarkdownBlock;
/* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class IotexCoreJsonRpc extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <div className="mainContainer">
          <Container>
            <MarkdownBlock>
              {idlToMarkdown()}
            </MarkdownBlock>
          </Container>
        </div>
      </div>
    );
  }
}

function idlToMarkdown() {
  return idl.map(en => {
    return `
${getMethod(en)}
              `
  }).join('');
}

function getMethod(item) {
  if (item.type === 'struct') {
    return '';
  }
  if (item.type === 'comment') {
    return '';
  }
  if (item.type === 'meta') {
    return '';
  }

  let fn = '';
  if (item.type === 'interface') {
    fn = item
      .functions
      .map(f => {
        return `
## ${item.name}.${f.name}

${f.comment}

### Parameters

\`\`\`
${JSON.stringify(f.params, null, 2)}
\`\`\`

### Returns

\`\`\`
${JSON.stringify(f.returns, null, 2)}
\`\`\`

### Example

\`\`\`
curl -X POST --data '{"jsonrpc":"2.0","method":"${item.name}.${f.name}","params":[${f.params.map(p => (`${p.name}: ${p.type}`)).join(', ')}],"id":1}'
\`\`\`

`
      })
      .join('\n\n\n');
  }

  return fn + '\n```' + JSON.stringify(item, null, 2) + '```';
}

module.exports = IotexCoreJsonRpc;
module.exports.idlToMarkdown = idlToMarkdown;
