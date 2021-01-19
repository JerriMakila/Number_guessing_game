import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [guessAmount, setGuessAmount] = useState(1);
  const [number, setNumber] = useState(Math.floor(Math .random() * 100) + 1);
  const [message, setMessage] = useState('Guess a number between 1-100');

  const makeGuess = () => {
    if(parseInt(guess) < number){
      setMessage('Your guess ' + guess + " is too low");
    } else if(parseInt(guess) > number){
      setMessage('Your guess ' + guess + " is too high");
    } else if(parseInt(guess) === number) {
      if(guessAmount === 1){
        Alert.alert('You guessed the number in ' + guessAmount + " guess");
      } else {
        Alert.alert('You guessed the number in ' + guessAmount + " guesses");
      }

      setNumber(Math.floor(Math .random() * 100) + 1);
      setGuessAmount(0);
    }
    setGuessAmount(guessAmount + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.appComponent}>
        <Text style={{fontSize:20}}>{message}</Text>
      </View>
      <View style={styles.appComponent}>
        <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={guess}
        onChangeText={guess => setGuess(guess)}>
        </TextInput>
      </View>
      <View style={styles.appComponent}>
        <Button onPress={makeGuess} title='MAKE GUESS'></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appComponent: {
    marginBottom: 10,
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 25,
    height: 35,
    marginBottom: 5,
    paddingHorizontal:5,
    width: 50,
  },
});
