import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MyContext } from './src/context';

import Entries from './src/components/Entries';
import LoserScreen from './src/components/LoserScreen';


class App extends Component{
  //static contextType = MyContext;

  state = {
    stage:1,
    players:[],
    result:""
}

  render(){
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          this.state.stage === 1 ? (
            <Entries/>
          ) : (
            <LoserScreen/>
          )
        }
      </View>
    </ScrollView>
  )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:80
  },
});

export default App;