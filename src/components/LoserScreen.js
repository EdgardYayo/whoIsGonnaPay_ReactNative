import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-elements';
import { MainLogo } from '../utils/tools';



const LoserScreen = ({ result, getNewLooser, resetGame }) => {
  return (
    <>

      <MainLogo/>

      <Text style={{ marginTop: 20, fontSize: 25, fontStyle:"italic" }}>The looser is</Text>
      <Text 
      style={{ 
        marginTop:30, 
        fontSize:22,
      }}>
        { result }
      </Text>
      <Button 
        buttonStyle={styles.button}
        title="Try Again"
        onPress={() => getNewLooser()}
      />
       <Button 
        buttonStyle={styles.button}
        title="Start Over"
        onPress={() => resetGame()}
      />

    </>
  );
};


const styles = StyleSheet.create({
  button:{
    backgroundColor: '#41b6e6',
    marginTop:20
  }
})

export default LoserScreen;