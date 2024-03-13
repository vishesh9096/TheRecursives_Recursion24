import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './navigation/Navigation';
import {
  ConnectWallet,
  localWallet,
  metamaskWallet,
  rainbowWallet,
  ThirdwebProvider,

} from '@thirdweb-dev/react-native';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


console.disableYellowBox = true;

function App() {
  return (
    <ThirdwebProvider
    activeChain="goerli"

    clientId="6b9ff5c7fa50310d44c6644d54e8e673"// uncomment this line after you set your clientId in the .env file
    supportedWallets={[metamaskWallet(), rainbowWallet(), localWallet()]}>
    {/* <AppInner /> */}
    <GestureHandlerRootView style={{ flex: 1 }}>

        <Navigation />

    </GestureHandlerRootView>
  </ThirdwebProvider>

    

    
  );
}

export default App;
