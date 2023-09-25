import React from 'react';
// import Eg from './src/Eg/Eg';
// import Fs from './src/Fs/Fs_full';
// import DeviceInfo from './src/DeviceInfo/DeviceInfo';
// import ShareAPI from './src/Share/ShareAPI';
// import ShareNativeText from './src/Share/ShareNative';
// import {ShareNativeImagePdf, ShareNativeText} from './src/Share/ShareNative';
// import ShareNativePdf from './src/Share/SharePdf';

// import Network from './src/Network/Network';
// import Nettest from './src/Network/Nettest';

// import {ApolloProvider} from '@apollo/client';
// import client from './src/api_client_gql/client_gql';
// import Apitest from './src/api_client_gql/Apitest';

import WhatsApp from './src/whatsapp/WhatsApp';

export default function App() {
  // return <Network />;
  // return <Nettest />;

  // return (
    // <ApolloProvider client={client}>
    // { <Apitest /> }
    // </ApolloProvider>
    // </>
  // );

  return <WhatsApp/>;
}
