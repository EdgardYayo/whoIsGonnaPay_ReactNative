import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Entries from './src/components/Entries';
import LoserScreen from './src/components/LoserScreen';


class App extends Component{
  //static contextType = MyContext;

  state = {
    stage:1,
    players:[],
    result:""
}

addPlayerHandler = (name) => {
  this.setState((prevState, props) => ({
    players:[
      ...prevState.players,
      name
    ]
  }))
}

removePlayerHandler = (idx) => {
  let newArray = this.state.players;
  newArray.splice(idx, 1);
  this.setState({ players: newArray});
}

render(){
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          this.state.stage === 1 ? (
            <Entries 
              addPlayer={this.addPlayerHandler} 
              players={this.state.players}
              removePlayer={this.removePlayerHandler}
              />
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