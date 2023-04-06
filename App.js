import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Toast  from 'react-native-toast-message';

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

nextHandler = () => {
  const { players } = this.state;
  if(players.length < 2){
    //alert("You need at least two players to play")
    Toast.show({
      type:"error",
      position:"top",
      autoHide: true,
      visibilityTime: 2500,
      text1: "Sorry",
      text2: "You need at least two players to play"
    })
  } else {
    this.setState({
      stage:2
    }, () => {
      this.generateLooser()
    })
  }
}

generateLooser = () => {
  const { players } = this.state;
  this.setState({
    result: players[Math.floor(Math.random() * players.length)]
  })
}

resetGame = () => {
  this.setState({
    stage:1,
    players:[],
    result:""
  })
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
              nextStage={this.nextHandler}
              />
          ) : (
            <LoserScreen
              result={this.state.result}
              getNewLooser={this.generateLooser}
              resetGame={this.resetGame} 
            />
          )
        }
      </View>
      <Toast/>
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

