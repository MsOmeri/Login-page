    import React, {Component} from 'react';
    import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


    export default class App extends Component {
      render() {
        return (
          <View style={styles.container}>
            <Text>style={styles.welcome}>Login To</Text>
            <Text>style={styles.design}>North Mall</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.userBtn}
                onPress={() => alert("Login Works")}
              >

                <Text style={styles.btnTxt}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.userBtn}
                onPress={() => alert("Signup Works")}
              >
                <Text style={styles.btnTxt}>Signup</Text>
              </TouchableOpacity>
            </View>
            </View>
          );
        }
    }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0057ff'
      },
      welcome:{
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: "#fff",
        fontFamily:"DancingScript-Bold"
      },
      design:{
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: "#fff",
        fontFamily:"Roboto"
      },
      input:{
        width: "90%",
        backgroundColor: "#bbf209",
        padding: 15,
        marginBottom: 10
      },
      btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%"
      },
      userBtn:{
        backgroundColor: "#bbf209",
        padding: 15,
        width: "45%"
      },
      btnTxt: {
        fontSize: 18,
        textAlign: 'center'
      }
    });
