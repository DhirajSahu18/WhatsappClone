import React from 'react';
import Messenger from './components/Messenger';

import { GoogleOAuthProvider } from '@react-oauth/google';

import AccountProvider from './components/context/AccountProvider';

function App() {

  const clientId = '985203380854-gc94nagctf4oaqq53q92cbt67n3snr9k.apps.googleusercontent.com';
  
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
