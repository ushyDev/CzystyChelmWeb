import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet, Platform, Dimensions, Image, TextInput, Modal } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SelectionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: true,
      log: false, 
      email: "",
      password: "",
      isPhone: false,
    };
  }
  
  componentDidMount(){
    if(windowHeight > windowWidth){
      this.setState({isPhone: true})
    }
  }

  render() {
    return (
      <View style={styles.container}>

<Modal
isVisible={this.state.isPhone}

>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 20, color: '#2fd756', fontWeight: '500', fontFamily: 'rubikRegular'}}>Czysty</Text>
              <Text style={{fontSize: 20, color: '#000000', fontWeight: '500', fontFamily: 'rubikRegular'}}>Chelm.pl </Text>
         </View>
          <Text style={{fontFamily: 'rubikRegular', fontSize: 15, color: 'black'}}>Pobierz aplikację mobilną</Text>
        </View>
      </Modal>

          <View style={styles.panelboczny}>
            <Image style={{flex:1, marginLeft: -20, marginTop: -30, zIndex: -1}} source={require('../assets/bazylika.jpg')} />

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
            <Text style={{fontSize: 18, color: '#2F462B', fontWeight: '500', fontFamily: 'rubikLight'}}>
              Platforma do zarządzania gospodarką odpadów komunalnych oraz
              </Text>
              <Text style={{fontSize: 18, color: '#2F462B', fontWeight: '500', fontFamily: 'rubikLight'}}>
              monitorowania zbiórek i obsługi deklaracji.
              </Text>
            </View>
        </View>

      {this.state.select &&

        <View style={styles.buttonContener}>

         

            <View style={styles.button}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('login')
}>
                 <View style={{flexDirection: 'row', justifyContent: 'center',paddingHorizontal: 20}}>
                   <Text 
                   style={{fontSize: 18, color: 'white', fontWeight: '500', fontFamily: 'rubikLight', letterSpacing: 3, marginRight: 150, marginTop :15}}>
                     Samorząd
                     </Text>
                   <Image style={{width: 50, height: 50, resizeMode: 'contain'}} source={require('../assets/office-building.png')}/>
               </View>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
               <TouchableOpacity>
                 <View style={{flexDirection: 'row', justifyContent: 'center',paddingHorizontal: 20, }}>
                   <Text 
                   style={{fontSize: 18, color: 'white', fontWeight: '500', fontFamily: 'rubikLight',  letterSpacing: 3, marginRight: 80, marginTop :10}}>
                     Firma utylizująca
                     </Text>
                   <Image style={{width: 50, height: 50, resizeMode: 'contain', }} source={require('../assets/lorry.png')}/>
               </View>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
               <TouchableOpacity>
                 <View 
                 style={{flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal: 30}}>
                   <Text style={{fontSize: 18, color: 'white', fontWeight: '500', fontFamily: 'rubikLight', letterSpacing: 3,marginRight: 40, marginTop :0}}>
                     Mieszakniec lub instytucja
                     </Text>
                   <Image style={{width: 50, height: 50, resizeMode: 'contain'}} source={require('../assets/group.png')}/>
               </View>
                </TouchableOpacity>
            </View>
           

        </View>
      }

      




          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        flexDirection: (Platform.OS === 'web') ? 'row' : 'column'
    },
    panelboczny: {
      width: Dimensions.get('window').width*0.25,
      height: Dimensions.get('window').height,
      zIndex: -1,
      alignSelf: 'flex-start',
      
      paddingLeft: 0,
      paddingTop: 20
    },
    panelGlowny:{
      backgroundColor: 'white',
      width: windowWidth*0.782,
      height:windowHeight,
      borderWidth: 0,
      borderRadius: 30,
      paddingBottom: 80,
      //cien
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      
      elevation: 14,
      zIndex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: -50
      
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
      
    },
    buttonContener:{
      flexDirection: 'column',
      marginTop: 100,
    },
    button:{
      backgroundColor: '#2fd756',
    width: windowWidth /3.5,
    height: windowHeight /9,
     borderWidth: 0,
     borderRadius: 15,
     marginBottom: 30,
     justifyContent: 'center',
     alignItems:'center'
     
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
      marginLeft: 500

  },
  obramowka:{
    borderWidth: 2,
    padding: 100,
    borderColor: '#2fd756',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -100,
    
   }
    
 
    
});