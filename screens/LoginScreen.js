import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import firebase from "firebase";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "chelm@gmail.com",
        password: "123456"
    };
  }

 login = (email, password) => {
    try {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(res => {
             console.log(res.user.email);
             this.props.navigation.navigate('admin')
      });
} catch (error) {
      console.log(error.toString(error));
      console.log('Zle pasy')
    }
  };

  SignUp = (email, password) => {
    try {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => { 
                 console.log(user);
           });
} catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.panelBoczny}>

        </View>
        <View style={styles.panelGlowny}>

        <View style={styles.napisyCon}>
          <View style={styles.logoContener}>
              <Text style={{fontSize: 30, color: '#2fd756', fontWeight: '500', fontFamily: 'rubikRegular'}}>Czysty</Text>
              <Text style={{fontSize: 30, color: '#000000', fontWeight: '500', fontFamily: 'rubikRegular'}}>Chelm.pl </Text>
              <Text style={{fontSize: 30, color: '#000000', fontWeight: '100', fontFamily: 'rubikRegular'}}> 
               - bezpieczna segregacja odpadów.
              </Text>
            </View>
            <View style={styles.napisContener}>
            <Text style={{fontSize: 15, color: '#2F462B', fontWeight: '500', fontFamily: 'rubikLight'}}>
Rejestrujesz się do systemu zarządzania gospodarką odpadów komunalnych
              </Text>
             
            </View>
        </View>
        <View style={styles.obramowka}>

          <Text style={{fontSize: 25, color: '#2F462B',  fontFamily: 'rubikRegular', letterSpacing: 4.5, marginTop: -50, marginBottom: 60}}>Logowanie</Text>

        <View style={styles.email}>

            <TextInput
             style={{height: 50, width: 300, fontSize: 20, marginLeft :20, color: 'black', outline: "none"}}
             placeholderTextColor='black'
             placeholder="Email"
             onChangeText={text => this.setState({email: text})}
             defaultValue={this.state.email}
            />
        </View>
        <View style={styles.haslo}>
            <TextInput
             style={{height: 50, width: 300, fontSize: 20, marginLeft :20, color: 'black', outline: "none"}}
             placeholderTextColor='black'
             placeholder="Hasło"
             onChangeText={text => this.setState({password: text})}
             defaultValue={this.state.password}
             secureTextEntry={true}
            />
        </View>
       
        </View>
         <View style={styles.log}>
            <TouchableOpacity onPress={() => this.login(this.state.email, this.state.password)}>
            <Text style={{fontSize: 20, color: 'white'}}>Zaloguj</Text>
            </TouchableOpacity>
        </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#f5f5f5',
      flex: 1,
      flexDirection: 'row'
    },
    email:{
        borderWidth: 1,
        backgroundColor: 'white',
        borderWidth:0,
        margin: 25,
        borderBottomWidth:1,
        borderColor: '#2fd756'

    },
    haslo:{
      borderWidth: 1,
      backgroundColor: 'white',
      borderWidth:0,
      margin: 25,
      borderBottomWidth:1,
      borderColor: '#2fd756'


    },
    log:{
        borderWidth: 1,
        backgroundColor: '#2fd756',
        borderWidth:0,
        borderRadius: 30,
        margin: 15,
        padding: 12,
        marginLeft: 500,
       

    },
    panelGlowny:{
      backgroundColor: 'white',
        width: windowWidth*0.782,
        marginLeft: -50,
        borderWidth: 0,
        borderRadius: 30,
        //cien
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        
        elevation: 14,
        zIndex:-1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    panelBoczny:{
      width: Dimensions.get('window').width*0.25,
        height: Dimensions.get('window').height,

        alignSelf: 'flex-start',
        
        paddingLeft: 20,
        paddingTop: 20
    },
    logoContener:{
      paddingTop: 30,
        flexDirection: 'row'
    },
    napisContener:{
      paddingTop: 30,
      flexDirection: 'column',
      paddingBottom: 20
    },
    napisyCon:{
      alignSelf: 'flex-start',
      marginLeft: 110,
      marginBottom: 50,
      marginTop: 20,
      
    },
    obramowka:{
     borderWidth: 2,
     padding: 100,
     borderColor: '#2fd756',
     borderRadius: 15,
     justifyContent: 'center',
     alignItems: 'center'
    }
});