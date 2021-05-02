# UI for Substrate Bridges

The goal of the UI is to provide the users a convenient way of interacting with the Bridge - querying its state and sending transactions.

| 🚀  | Live version at [//tomusdrw.github.io/parity-bridges-ui](https://tomusdrw.github.io/parity-bridges-ui) |
| --- | :--------------------------------------------------------------------------------------------------------- |

## Configuring custom Substrate providers / chains

In the `.env` file at root project directory, you have to define the following env variables:

```
REACT_APP_CHAIN_1=Rialto
REACT_APP_CHAIN_2=Millau
REACT_APP_RIALTO_SUBSTRATE_PROVIDER=ws://127.0.0.1:9944
REACT_APP_MILLAU_SUBSTRATE_PROVIDER=ws://127.0.0.1:9945
REACT_APP_LANE_ID=0x00000000
REACT_APP_KEYRING_DEV_LOAD_ACCOUNTS=true
REACT_APP_MILLAU_SS58_PREFIX=60
REACT_APP_RIALTO_SS58_PREFIX=48
REACT_APP_MILLAU_BRIDGE_ID=mlau
REACT_APP_RIALTO_BRIDGE_ID=rlto
```

| ℹ️  | In case these values are not provided the default chains will be Rialto and Millau chains. |
| --- | :----------------------------------------------------------------------------------------- |

## Running the bridge

Please refer to this section of the Bridges project to run the bridge locally: [running-the-bridge](https://github.com/paritytech/parity-bridges-common#running-the-bridge)

## Development

### `yarn`

This will install all the dependencies for the project.

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `yarn test`

Runs the test suite.

### `yarn lint`

Runs the linter & formatter.

## customTypes config files process.

There is an automated process that downloads all the required types<CHAIN>.json files available in the deployments section of [parity-bridges-common](https://github.com/paritytech/parity-bridges-common/tree/master/deployments) repository.
This hook is executed before the local development server starts and during the lint/test/build process during deployment.
In case there is an unexpected issue with this process you can test this process isolated by running:

### `yarn prestart`

## Learn More

For additional information about the Bridges Project please refer to [parity-bridges-common](https://github.com/paritytech/parity-bridges-common) repository.
