import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ConnectWallet, Web3Button, darkTheme, useAddress, useContract, useContractWrite,useMetaMaskWallet,useMetamask } from '@thirdweb-dev/react-native';
import { Utils } from '../../contants';

const SmartContractScreen = () => {
  // const { contract } = useContract("0x7Cc9b01a2368F4df86D2bAc9881b35db5da09297");
  const { contract } = useContract("0xbef3d2900324345D698d2eA583e952Ccb9E2ff18");
  // const { mutateAsync: addLegalDocument, isLoading } = useContractWrite(contract, "addAppointment")
  // const call = async () => {
  //   try {
  //     const data = await addLegalDocument({ args: ["vishesh", "12123421"] });
  //     console.info("contract call successs", data);
  //   } catch (err) {
  //     console.error("contract call failure", err);
  //   }
  // }
  const { mutateAsync: approveOrderAsTrader, isLoading } = useContractWrite(contract, "approveOrderAsTrader")

  const call = async () => {
    try {
      const data = await approveOrderAsTrader({ args: [0] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  return (
    <SafeAreaView>
      <TouchableOpacity 
      style={{marginBottom:Utils.ScreenHeight(8)}}
      onPress={()=>{call()}}>
      <Text>SmartContractt</Text>
      </TouchableOpacity>

      <ConnectWallet theme={darkTheme}  />
      {/* <Web3Button
  contractAddress="0x87e406BEe0a0D30D0FA9D535e0841666FC404652"
  action={(contract) => contract.call("addLegalDocument", "47398","vishesh")}
  className={styles.button}
  >
  StylingButtonn
</Web3Button> */}
    
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor:"aqua",
        height:Utils.ScreenHeight(8),
        width:"100%",
        justifyContent:"center"
    },

});



export default SmartContractScreen