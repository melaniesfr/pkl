import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ position: 'relative', flex: 1, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <View style={styles.boxLogin}>
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.input}>
              <Icon
                name={'mail-outline'}
                size={20}
                style={{ marginTop: 13, marginRight: 5 }}
              />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.input}>
              <Icon
                name={'key-outline'}
                size={20}
                style={{ marginTop: 11, marginRight: 5 }}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('BerandaAdmin')}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ position: 'absolute', right: 20, bottom: 20 }}>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('BerandaUser')}>
            <Text style={styles.nextText}>Lewati</Text>
            <Icon
              name={'chevron-forward-circle-outline'}
              size={20}
              color={'white'}
              style={{ marginLeft: 5 }}
            />
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
    backgroundColor: 'white',
    borderTopStartRadius: 25,
    borderBottomEndRadius: 25,
    padding: 20,
    elevation: 10
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
    paddingLeft: 5,
    flexDirection: 'row'
  },
  loginButton: {
    marginTop: 10,
    width: '100%',
    height: 10,
    backgroundColor: '#4a94d9',
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  loginText: {
    color: 'white',
    fontSize: 15
  },
  nextButton: {
    backgroundColor: '#2eb877',
    padding: 10,
    borderRadius: 5,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 5
  },
  nextText: {
    color: 'white',
    fontSize: 15
  }
});