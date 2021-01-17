import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ position: 'relative', flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.boxLogin}>
            <Text style={styles.title}>LOGIN</Text>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} />

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ position: 'absolute', right: 20, bottom: 20 }}>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextText}>Lewati</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxLogin: {
    width: '80%',
    height: 250,
    borderWidth: 1,
    borderColor: 'grey',
    borderTopStartRadius: 25,
    borderBottomEndRadius: 25,
    padding: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    paddingLeft: 10
  },
  loginButton: {
    marginTop: 10,
    width: '100%',
    height: 10,
    backgroundColor: '#4a94d9',
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    color: 'white',
    fontSize: 15
  },
  nextButton: {
    backgroundColor: '#2eb877',
    padding: 10,
    borderRadius: 5,
    width: 75,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextText: {
    color: 'white',
    fontSize: 15
  }
});