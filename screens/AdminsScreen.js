import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, FlatList} from 'react-native';
import MapView , { Marker } from 'react-native-maps';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


import firebase from 'firebase';
import 'firebase/firestore';
import { TextInput } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class AdminsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapyColor: true,
      statystykiColor: false,
      deklaracjeColor: false,
      harmonogramColor: false,
      dodajzbiorkeColor: false,
      zatwierdzColor:false,
      covidColor:false,
      posesje: false,
      zbiorki: false,
      covid: false,
      metal: false,
      izola: false,
      anomal:false,
      posesjeBaza: [],
      zbiorkiBaza: [],
      wykazBaza: [],
      batilekBaza: [],
      covidBaza:[],
      deklaracjeBaza: [],

      posesjaInfo: '',
      posesjaInfo2: '',
      posesjaInfo3: '',

      wybdek: true,
      wybniedek: false,
      filtrbrak: false,
      filtrjest: false,
      filtrseg: false,
      filtrsegbrak:false,
      filtrzero:true,
      miejsceDek: '',
      adresDek: '',
      iloscOsob: 0,

      xdekzloz: false,
      xdekzero: false,
      xdeknie: false,
      xdeknie: false,

      ydekzloz: [],
      ydekzer: [],
      ydeknie: [],
      
      xzbiorbio: false,
      xzbiormetal: false,
      xzbiormiasto: false,
      xzbiorpapier: false,
      xzbiorszklo: false,
      xzbiorzmieszane: false,
      zglosCos: true,
      zglosCosEkran: false,
      dzieki: false,
      zgloszeniaBaza: [],
      //forumlarz
      imie: '',
      numertelefonu: '',
      ulica: '',
      budynek: '',
      lokal: '',
      opis: ''
    };
  }

  limit = 35;
pinColor = '#000000';




componentDidMount(){
const posesjeRef = firebase.firestore().collection('datakson').limit(this.limit)
const zbiorkiRef = firebase.firestore().collection('zbiorki').limit(this.limit)
const wykazRef = firebase.firestore().collection('odpady').limit(this.limit)
const batilekRef = firebase.firestore().collection('batilek').limit(this.limit)
const covidRef = firebase.firestore().collection('covid').limit(this.limit)
const deklaracjeRef = firebase.firestore().collection('deklaracje').limit(this.limit)
const zgloszeniaRef = firebase.firestore().collection('zgloszenia').limit(this.limit)



deklaracjeRef
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                this.setState({deklaracjeBaza: newEntities})
                
             
            },
            error => {
                console.log(error)

            }
        )



covidRef
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                this.setState({covidBaza: newEntities})

                // console.log(this.state.covidBaza)
                
             
            },
            error => {
                console.log(error)

            }
        )

        zgloszeniaRef
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                this.setState({zgloszeniaBaza: newEntities})

                // console.log(this.state.covidBaza)
                
             
            },
            error => {
                console.log(error)

            }
        )

  posesjeRef
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                this.setState({posesjeBaza: newEntities})

                // console.log(this.state.posesjeBaza)
                
             
            },
            error => {
                console.log(error)

            }
        )




        wykazRef
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                this.setState({wykazBaza: newEntities})

                // console.log(this.state.posesjeBaza)
                
             
            },
            error => {
                console.log(error)

            }
        )

        batilekRef
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                this.setState({batilekBaza: newEntities})

                // console.log(this.state.posesjeBaza)
                
             
            },
            error => {
                console.log(error)

            }
        )

        zbiorkiRef
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                this.setState({zbiorkiBaza: newEntities})

                // console.log(this.state.zbiorkiBaza)
            },
            error => {
                console.log(error)
                

            }
        )

}

  render() {
    const renderItemZgloszenia = ({item}) => (
      <View style={{width: windowWidth* 0.5, borderLeftWidth: 1, borderColor: '#2fd756', marginVertical:30, paddingBottom: 15, paddingHorizontal:  4}}>
        <Text style={{fontSize: 14, fontFamily: 'rubikLight', color: '#2fd756'}}>Imie i naziwsko:</Text>
        <Text style={{fontSize: 20, fontFamily: 'rubikLight', color: 'black'}}>{item.imie}</Text>
        <Text style={{fontSize: 14, fontFamily: 'rubikLight', color: '#2fd756'}}>Adres:</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 20, fontFamily: 'rubikLight', color: 'black', marginRight: 10}}>{item.ulica}</Text>
        <Text style={{fontSize: 20, fontFamily: 'rubikLight', color: 'black'}}>{item.budynek}</Text>
        <Text style={{fontSize: 20, fontFamily: 'rubikLight', color: 'black'}}>/</Text>
        <Text style={{fontSize: 20, fontFamily: 'rubikLight', color: 'black'}}>{item.lokal}</Text>
        </View>
        <Text style={{fontSize: 14, fontFamily: 'rubikLight', color: '#2fd756'}}>Opis:</Text>
        <Text style={{fontSize: 20, fontFamily: 'rubikLight', color: 'black'}}>{item.opis}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
       <View style={{ backgroundColor: '#2fd756', padding :10, borderRadius: 15, borderWidth: 0, marginHorizontal: 10}}><Text style={{color: 'white', fontSize: 15, fontFamily: 'rubikLight'}}>Zatwierdź</Text></View>
       <View style={{ backgroundColor: 'red', padding :10, borderRadius: 15, borderWidth: 0, marginHorizontal: 10}}><Text style={{color: 'white', fontSize: 15, fontFamily: 'rubikLight'}}>Odrzuć</Text></View>

           </View>
  </View>
    );




    const renderItemSegBrak = ({ item }) => (
      <View>
     
      {item.segregacja === "N" &&
        <TouchableOpacity onPress={() => this.setState({wybdek: false, wybniedek: true, adresDek: item.adr, miejsceDek: item.typ, iloscOsob: item.ilosc_osob})}>
      <View style={{ borderBottomWidth: 1, borderColor: '#2fd756', padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 15, color: 'black', fontWeight: '500', fontFamily: 'rubikLight'}}>{item.id}</Text>
      {item.segregacja === "T" &&
              <View style={{backgroundColor: '#2fd756', width: 20, height: 20, borderRadius: 10,}}></View>
      }
      {item.segregacja === "N" &&
    <View style={{backgroundColor: '#ffff00', width: 20, height: 20, borderRadius: 10,}}></View>

      }
       {item.deklaracja === 0 &&
              <View style={{backgroundColor: 'red', width: 20, height: 20, borderRadius: 10,}}></View>
      }
    </View>
    </TouchableOpacity>
    }
    </View>
      );

    const renderItemSeg = ({ item }) => (
      <View>
     
      {item.segregacja === "T" &&
        <TouchableOpacity onPress={() => this.setState({wybdek: false, wybniedek: true, adresDek: item.adr, miejsceDek: item.typ, iloscOsob: item.ilosc_osob})}>
      <View style={{ borderBottomWidth: 1, borderColor: '#2fd756', padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 15, color: 'black', fontWeight: '500', fontFamily: 'rubikLight'}}>{item.id}</Text>
      {item.segregacja === "T" &&
              <View style={{backgroundColor: '#2fd756', width: 20, height: 20, borderRadius: 10,}}></View>
      }
      {item.segregacja === "N" &&
    <View style={{backgroundColor: '#ffff00', width: 20, height: 20, borderRadius: 10,}}></View>

      }
       {item.deklaracja === 0 &&
              <View style={{backgroundColor: 'red', width: 20, height: 20, borderRadius: 10,}}></View>
      }
    </View>
    </TouchableOpacity>
    }
    </View>
      );

    const renderItemJest = ({ item }) => (
      <View>
     
      {item.deklaracja === 1 &&
        <TouchableOpacity onPress={() => this.setState({wybdek: false, wybniedek: true, adresDek: item.adr, miejsceDek: item.typ, iloscOsob: item.ilosc_osob})}>
      <View style={{ borderBottomWidth: 1, borderColor: '#2fd756', padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 15, color: 'black', fontWeight: '500', fontFamily: 'rubikLight'}}>{item.id}</Text>
      {item.segregacja === "T" &&
              <View style={{backgroundColor: '#2fd756', width: 20, height: 20, borderRadius: 10,}}></View>
      }
      {item.segregacja === "N" &&
    <View style={{backgroundColor: '#ffff00', width: 20, height: 20, borderRadius: 10,}}></View>

      }
       {item.deklaracja === 0 &&
              <View style={{backgroundColor: 'red', width: 20, height: 20, borderRadius: 10,}}></View>
      }
    </View>
    </TouchableOpacity>
    }
    </View>
      );

    const renderItemBrak = ({ item }) => (
      <View>
     
      {item.deklaracja ===0 &&
        <TouchableOpacity onPress={() => this.setState({wybdek: false, wybniedek: true, adresDek: item.adr, miejsceDek: item.typ, iloscOsob: item.ilosc_osob})}>
      <View style={{ borderBottomWidth: 1, borderColor: '#2fd756', padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 15, color: 'black', fontWeight: '500', fontFamily: 'rubikLight'}}>{item.id}</Text>
      {item.segregacja === "T" &&
              <View style={{backgroundColor: '#2fd756', width: 20, height: 20, borderRadius: 10,}}></View>
      }
      {item.segregacja === "N" &&
    <View style={{backgroundColor: '#ffff00', width: 20, height: 20, borderRadius: 10,}}></View>

      }
       {item.deklaracja === 0 &&
              <View style={{backgroundColor: 'red', width: 20, height: 20, borderRadius: 10,}}></View>
      }
    </View>
    </TouchableOpacity>
    }
    </View>
      );

    const renderItem = ({ item }) => (
      <View>
     
      {this.state.filtrzero &&
        <TouchableOpacity onPress={() => this.setState({wybdek: false, wybniedek: true, adresDek: item.adr, miejsceDek: item.typ, iloscOsob: item.ilosc_osob})}>
      <View style={{ borderBottomWidth: 1, borderColor: '#2fd756', padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 15, color: 'black', fontWeight: '500', fontFamily: 'rubikLight'}}>{item.id}</Text>
      {item.segregacja === "T" &&
              <View style={{backgroundColor: '#2fd756', width: 20, height: 20, borderRadius: 10,}}></View>
      }
      {item.segregacja === "N" &&
    <View style={{backgroundColor: '#ffff00', width: 20, height: 20, borderRadius: 10,}}></View>

      }
       {item.deklaracja === 0 &&
              <View style={{backgroundColor: 'red', width: 20, height: 20, borderRadius: 10,}}></View>
      }
    </View>
    </TouchableOpacity>
    }
    </View>
      );

    return (
     <View style={styles.container}>
         <View style={styles.panelboczny}>
            <View style={styles.logoContener}>
              <Text style={{fontSize: 25, color: '#2fd756', fontWeight: '500', fontFamily: 'rubikRegular'}}>Czysty</Text>
              <Text style={{fontSize: 25, color: '#000000', fontWeight: '500', fontFamily: 'rubikRegular'}}>Chelm.pl</Text>

            </View>
          <View style={styles.containerMenu}>

            <View style={[styles.contenerButton, {backgroundColor: (this.state.mapyColor) ? 'white' : null,}]}>
              <TouchableOpacity 
              onPress={() => this.setState({ mapyColor: true, statystykiColor: false, deklaracjeColor: false, harmonogramColor: false, dodajzbiorkeColor: false, zatwierdzColor: false, covidColor: false})}>
                <Text style={[styles.mapyText, {color: (this.state.mapyColor) ? '#2fd756' : 'black'}]}>Mapa</Text>
                <Text>{this.state.mapyColor}</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.contenerButton, {backgroundColor: (this.state.statystykiColor) ? 'white' : null,}]}>
              <TouchableOpacity onPress={() => this.setState({ statystykiColor: true, mapyColor: false, deklaracjeColor: false, harmonogramColor: false, dodajzbiorkeColor: false, zatwierdzColor: false, covidColor: false})}>
                <Text style={[styles.mapyText, {color: (this.state.statystykiColor) ? '#2fd756' : 'black'}]}>Statystyki</Text>
                <Text>{this.state.mapyColor}</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.contenerButton, {backgroundColor: (this.state.deklaracjeColor) ? 'white' : null,}]}>
              <TouchableOpacity onPress={() => this.setState({ statystykiColor: false, mapyColor: false, deklaracjeColor: true, harmonogramColor: false, dodajzbiorkeColor: false, zatwierdzColor: false, covidColor: false})}>
                <Text style={[styles.mapyText, {color: (this.state.deklaracjeColor) ? '#2fd756' : 'black'}]}>Deklaracje</Text>
                <Text>{this.state.mapyColor}</Text>
              </TouchableOpacity>
            </View>

            {/* <View style={[styles.contenerButton, {backgroundColor: (this.state.harmonogramColor) ? 'white' : null,}]}>
              <TouchableOpacity onPress={() => this.setState({ statystykiColor: false, mapyColor: false, deklaracjeColor: false, harmonogramColor: true, dodajzbiorkeColor: false, zatwierdzColor: false, covidColor: false})}>
                <Text style={[styles.mapyText, {color: (this.state.harmonogramColor) ? '#2fd756' : 'black'}]}>Harmonogram</Text>
                <Text>{this.state.mapyColor}</Text>
              </TouchableOpacity>
            </View> */}

            <View style={[styles.contenerButton, {backgroundColor: (this.state.dodajzbiorkeColor) ? 'white' : null,}]}>
              <TouchableOpacity onPress={() => this.setState({ statystykiColor: false, mapyColor: false, deklaracjeColor: false, harmonogramColor: false, dodajzbiorkeColor: true, zatwierdzColor: false, covidColor: false})}>
                <Text style={[styles.mapyText, {color: (this.state.dodajzbiorkeColor) ? '#2fd756' : 'black'}]}>Dodaj zdarzenie</Text>
                <Text>{this.state.mapyColor}</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.contenerButton, {backgroundColor: (this.state.zatwierdzColor) ? 'white' : null,}]}>
              <TouchableOpacity onPress={() => this.setState({ statystykiColor: false, mapyColor: false, deklaracjeColor: false, harmonogramColor: false, dodajzbiorkeColor: false, zatwierdzColor: true, covidColor: false})}>
                <Text style={[styles.mapyText, {color: (this.state.zatwierdzColor) ? '#2fd756' : 'black'}]}>Zatwierdź zdarzenie</Text>
                <Text>{this.state.mapyColor}</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.contenerButton, {backgroundColor: (this.state.covidColor) ? 'white' : null,}]}>
              <TouchableOpacity onPress={() => this.setState({ statystykiColor: false, mapyColor: false, deklaracjeColor: false, harmonogramColor: false, dodajzbiorkeColor: false, zatwierdzColor: false, covidColor: true
              ,zbiorki: false,xdekzloz: false, posesje: true, covid: false, metal: false, izola: false, xdeknie: false})}>
                <Text style={[styles.mapyText, {color: (this.state.covidColor) ? '#2fd756' : 'red'}]}>Pandemia COVID</Text>
                <Text>{this.state.mapyColor}</Text>
              </TouchableOpacity>
            </View>



          </View>
         </View>
         <View style={styles.panelGlowny}>

{this.state.mapyColor &&
<View style={{justifyContent: 'center', alignItems: 'center'}}>
           <View style={styles.markeryContener}>
             <View style={{marginVertical: 20, }}>
               <Text style={{fontFamily: 'rubikLight', fontSize: 18}}>Wybierz kategorię:</Text>
            </View>
            <View style={{flexDirection: 'row', paddingBottom: 15}}>

            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center'}} onPress={() => this.setState({ zbiorki: false,xdekzloz: false, posesje: true, covid: false, metal: false, izola: false, xdeknie: false})}>
             <View style={[styles.markery1, {backgroundColor: (this.state.posesje) ? '#2fd756' : null}]}>
             </View>
              <Text style={[styles.textMarkery, {color: (this.state.posesje) ? '#2fd756' : 'black'}]}>deklaracje</Text>
              </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({ zbiorki: true, posesje: false,xdekzloz: false, covid: false, metal: false, izola: false,anomal: false, xdeknie: false})}>
             <View style={[styles.markery2, {backgroundColor: (this.state.zbiorki) ? '#2fd756' : null}]}>
                          </View>
             <Text style={[styles.textMarkery, {color: (this.state.zbiorki) ? '#2fd756' : 'black'}]}>PSZOK</Text>
              </TouchableOpacity>
                              <TouchableOpacity style={{flexDirection: 'row'}}  onPress={() => this.setState({ zbiorki: false,xdekzloz: false, posesje: false, covid: true, metal: false, izola: false,anomal: false, xdeknie: false})}>

             <View style={[styles.markery3, {backgroundColor: (this.state.covid) ? '#2fd756' : null}]}>
                          </View>

             <Text style={[styles.textMarkery, {color: (this.state.covid) ? '#2fd756' : 'black'}]}>odpady medyczne</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({ zbiorki: false,xdekzloz: false, posesje: false, covid: false, metal: true, izola: false,anomal: false, xdeknie: false})}>
             <View style={[styles.markery4, {backgroundColor: (this.state.metal) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery, {color: (this.state.metal) ? '#2fd756' : 'black'}]}>zbiórki charytatywne</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({ zbiorki: false,xdekzloz: false, posesje: false, covid: false, metal: false, izola: true,anomal: false, xdeknie: false})}>
             <View style={[styles.markery2, {backgroundColor: (this.state.izola) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery, {color: (this.state.izola) ? '#2fd756' : 'black'}]}>kwarantanna</Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({ zbiorki: false,xdekzloz: false, posesje: false, covid: false, metal: false, anomal: true, izola: false, xdeknie: false})}>
             <View style={[styles.markery4, {backgroundColor: (this.state.anomal) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery, {color: (this.state.anomal) ? '#2fd756' : 'black'}]}>anomalie</Text>
              </TouchableOpacity>
           

            </View>
            <View style={{flexDirection: 'row', }}>
              
              
            </View>

           </View>
          {this.state.posesje &&
           <View style={styles.markeryContener}>
           <View style={{marginBottom: 15, }}>
               <Text style={{fontFamily: 'rubikLight', fontSize: 15}}>Wybierz kategorię:</Text>
            </View>
            <View style={{flexDirection: 'row', }}>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({xdekzloz: true, xdekzero: false, xdeknie: false})}>
             <View style={[styles.rodzajmarker1, {backgroundColor: (this.state.xdekzloz) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery2, {color: (this.state.xdekzloz) ? '#2fd756' : 'black'}]}>złożone deklaracje</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({xdekzloz: false, xdekzero: true, xdeknie: false})}>
             <View style={[styles.rodzajmarker2, {backgroundColor: (this.state.xdekzero) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery2, {color: (this.state.xdekzero) ? '#2fd756' : 'black'}]}>deklracaje zerowe</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({xdekzloz: false, xdekzero: false, xdeknie: true})}>
             <View style={[styles.rodzajmarker2, {backgroundColor: (this.state.xdeknie) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery2, {color: (this.state.xdeknie) ? '#2fd756' : 'black'}]}>deklaracje niezłożone</Text>
              </TouchableOpacity>
            </View>
          </View>
          }
          {this.state.zbiorki &&
           <View style={styles.markeryContener}>
           <View style={{marginBottom: 15, }}>
               <Text style={{fontFamily: 'rubikLight', fontSize: 15}}>Wybierz kategorię:</Text>
            </View>
            <View style={{flexDirection: 'row', }}>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({xzbiorbio: true, xzbiormetal: false,  xzbiorpapier: false, xzbiorszklo: false, xzbiorzmieszane: false})}>
             <View style={[styles.rodzajmarker1, {backgroundColor: (this.state.xzbiorbio) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery2, {color: (this.state.xzbiorbio) ? '#2fd756' : 'black'}]}>BIO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({xzbiorbio: false, xzbiormetal: true,  xzbiorpapier: false, xzbiorszklo: false, xzbiorzmieszane: false})}>
             <View style={[styles.rodzajmarker2, {backgroundColor: (this.state.xzbiormetal) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery2, {color: (this.state.xzbiormetal) ? '#2fd756' : 'black'}]}>metal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({xzbiorbio: false, xzbiormetal: false, xzbiorpapier: true, xzbiorszklo: false, xzbiorzmieszane: false})}>
             <View style={[styles.rodzajmarker2, {backgroundColor: (this.state.xzbiorpapier) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery2, {color: (this.state.xzbiorpapier) ? '#2fd756' : 'black'}]}>papier</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({xzbiorbio: false, xzbiormetal: false, xzbiorpapier: false, xzbiorszklo: true, xzbiorzmieszane: false})}>
             <View style={[styles.rodzajmarker2, {backgroundColor: (this.state.xzbiorszklo) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery2, {color: (this.state.xzbiorszklo) ? '#2fd756' : 'black'}]}>szkło</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({xzbiorbio: false, xzbiormetal: false, xzbiorpapier: false, xzbiorszklo: false, xzbiorzmieszane: true})}>
             <View style={[styles.rodzajmarker2, {backgroundColor: (this.state.xzbiorzmieszane) ? '#2fd756' : null}]}>
              </View>
             <Text style={[styles.textMarkery2, {color: (this.state.xzbiorzmieszane) ? '#2fd756' : 'black'}]}>zmieszane</Text>
              </TouchableOpacity>
            </View>
          </View>
          }

            <View style={styles.mapContener}>
            <MapView 
      style={styles.mapStyle} 
      initialRegion={{
        latitude: 51.138163,
        longitude: 23.478027,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
        {this.state.xdekzloz && 
     this.state.posesjeBaza.map((posesja, index) => <MapView.Marker 
     key={index}
     onPress={() => this.setState({posesjaInfo: posesja.id, posesjaInfo2: posesja.TYP_NIERUCHOMOSCI, posesjaInfo3: posesja.SEGREGACJA})}
     coordinate={{
       latitude: posesja.Latitude,
       longitude: posesja.Longitude
     }
    
    }
     />)
}
  {this.state.xdeknie && 
     this.state.deklaracjeBaza.map((posesja, index) => <MapView.Marker 
     key={index}
     onPress={() => this.setState({posesjaInfo: posesja.id, posesjaInfo2: posesja.typ, posesjaInfo3: posesja.segregacja})}     coordinate={{
       latitude: posesja.Latitude,
       longitude: posesja.Longitude
     }
    
    }
     />)
}
 {this.state.xdekzero && 
     this.state.posesjeBaza.filter(dup => dup.SEGREGACJA === "N").map((posesja, index) => <MapView.Marker 
     key={index}
     onPress={() => this.setState({posesjaInfo: posesja.id, posesjaInfo2: posesja.TYP_NIERUCHOMOSCI, posesjaInfo3: posesja.SEGREGACJA})}
     coordinate={{
       latitude: posesja.Latitude,
       longitude: posesja.Longitude
     }
    
    }
     />)
}
   {this.state.xzbiorbio && 
     this.state.wykazBaza.filter(dup => dup.BIO == 1).map((posesja, index) => <MapView.Marker 
     key={index}
     onPress={() => this.setState({posesjaInfo: posesja.ADR, posesjaInfo2: posesja.WM})}
     coordinate={{
       latitude: posesja.Latitude,
       longitude: posesja.Longitude
     }}
     />)
}
   {this.state.xzbiormetal && 
     this.state.wykazBaza.filter(dup => dup.METAL == 1).map((posesja, index) => <MapView.Marker 
     key={index}
     onPress={() => this.setState({posesjaInfo: posesja.ADR, posesjaInfo2: posesja.WM})}
     coordinate={{
       latitude: posesja.Latitude,
       longitude: posesja.Longitude
     }}
     />)
}
   {this.state.xzbiorpapier && 
     this.state.wykazBaza.filter(dup => dup.PAPIER == 1).map((posesja, index) => <MapView.Marker 
     key={index}
     onPress={() => this.setState({posesjaInfo: posesja.ADR, posesjaInfo2: posesja.WM})}
     coordinate={{
       latitude: posesja.Latitude,
       longitude: posesja.Longitude
     }}
     />)
}
   {this.state.xzbiorszklo && 
     this.state.wykazBaza.filter(dup => dup.SZKŁO == 1).map((posesja, index) => <MapView.Marker 
     key={index}
     onPress={() => this.setState({posesjaInfo: posesja.ADR, posesjaInfo2: posesja.WM})}
     coordinate={{
       latitude: posesja.Latitude,
       longitude: posesja.Longitude
     }}
     />)
}
   {this.state.xzbiorzmieszane && 
     this.state.wykazBaza.filter(dup => dup.zmieszane == 1).map((posesja, index) => <MapView.Marker 
     key={index}
     onPress={() => this.setState({posesjaInfo: posesja.ADR, posesjaInfo2: posesja.WM})}
     coordinate={{
       latitude: posesja.Latitude,
       longitude: posesja.Longitude
     }}
     />)
}



{this.state.metal && 
  this.state.zbiorkiBaza.map((posesja, index) => <MapView.Marker 
  key={index}
  onPress={() => this.setState({posesjaInfo: posesja.nazwa, posesjaInfo2: posesja.adr})}
  coordinate={{
    latitude: posesja.Latitude,
    longitude: posesja.Longitude
  }}
  />)
}




 {this.state.covid && 
     this.state.covidBaza.map((posesja, index) => <MapView.Marker 
     key={index}
     onPress={() => this.setState({posesjaInfo: posesja.ADR, posesjaInfo2: posesja.nakwarantannie, posesjaInfo3: posesja.wilolatorium})}
     coordinate={{
       latitude: posesja.Latitude,
       longitude: posesja.Longitude
     }}
     />)
}

{this.state.izola && 
     this.state.covidBaza.map((posesja, index) => <MapView.Marker 
     key={index}
     onPress={() => this.setState({posesjaInfo: posesja.ADR, posesjaInfo2: posesja.nakwarantannie, posesjaInfo3: posesja.wilolatorium})}
     coordinate={{
       latitude: posesja.Latitude,
       longitude: posesja.Longitude
     }}
     />)
}

{this.state.anomal && 
  this.state.batilekBaza.map((posesja, index) => <MapView.Marker 
  key={index}
  onPress={() => this.setState({posesjaInfo: posesja.ADR, posesjaInfo2: posesja.opis, posesjaInfo3: posesja.autor})}
  coordinate={{
    latitude: posesja.Latitude,
    longitude: posesja.Longitude
  }}
  />)
}


      </MapView>
            </View>
              <View style={styles.podMapa}>
               
                  <View style={styles.info}>
                     {this.state.posesje && 
                  <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
  
                      <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Adres</Text>
                      <Text style={{fontFamily: 'rubikLight', padding: 3 }}>{this.state.posesjaInfo}</Text>
                      <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Typ</Text>
                      <Text style={{fontFamily: 'rubikLight', padding: 2}}>{this.state.posesjaInfo2}</Text>
                      <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Segregacja</Text>
                      <Text style={{fontFamily: 'rubikLight', padding: 2}}>{this.state.posesjaInfo3}</Text>
                  </View>
                   }
                    {this.state.zbiorki && 
                  <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    
                    <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Adres</Text>
                      <Text style={{fontFamily: 'rubikLight', padding: 3 }}>{this.state.posesjaInfo}</Text>
                      <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Zarządca</Text>
                      <Text style={{fontFamily: 'rubikLight', padding: 2}}>{this.state.posesjaInfo2}</Text>
                     
                  </View>
                   }
                    {this.state.covid && 
                  <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                      
                      <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Adres</Text>
                      <Text style={{fontFamily: 'rubikLight', padding: 3 }}>{this.state.posesjaInfo}</Text>
                      <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Osób na kwarantannie</Text>
                      <Text style={{fontFamily: 'rubikLight', padding: 2}}>{this.state.posesjaInfo2}</Text>
                      <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Osób w izolatorium</Text>
                      <Text style={{fontFamily: 'rubikLight', padding: 2}}>{this.state.posesjaInfo3}</Text>
                  </View>
                   }
                   {this.state.izola && 
                 <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                      
                 <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Adres</Text>
                 <Text style={{fontFamily: 'rubikLight', padding: 3 }}>{this.state.posesjaInfo}</Text>
                 <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Osób na kwarantannie</Text>
                 <Text style={{fontFamily: 'rubikLight', padding: 2}}>{this.state.posesjaInfo2}</Text>
                 <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Osób w izolatorium</Text>
                 <Text style={{fontFamily: 'rubikLight', padding: 2}}>{this.state.posesjaInfo3}</Text>
             </View>
                   }
                    {this.state.anomal && 
                 <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                      
                 <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Adres</Text>
                 <Text style={{fontFamily: 'rubikLight', padding: 3 }}>{this.state.posesjaInfo}</Text>
                 <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Opis</Text>
                 <Text style={{fontFamily: 'rubikLight', padding: 2}}>{this.state.posesjaInfo2}</Text>
                 <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Autor</Text>
                 <Text style={{fontFamily: 'rubikLight', padding: 2}}>{this.state.posesjaInfo3}</Text>
             </View>
                   }
                    {this.state.metal && 
                 <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                      
                 <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Nazwa</Text>
                 <Text style={{fontFamily: 'rubikLight', padding: 3 }}>{this.state.posesjaInfo}</Text>
                 <Text style={{fontFamily: 'rubikMedium', padding: 3, color: '#2fd756' }}>Adres</Text>
                 <Text style={{fontFamily: 'rubikLight', padding: 2}}>{this.state.posesjaInfo2}</Text>
                 
             </View>
                   }
                  </View>
              </View>
            </View>

    }
  
      
         {this.state.statystykiColor &&
    <View style={{justifyContent: 'center', alignItems: 'center', }}>
      <View style={{flexDirection: 'row'}}>
      <View style={styles.wykres}>
        <Text style={{fontFamily: 'rubikLight', padding: 3, color: '#2fd756', fontSize: 20, paddingBottom: 20 }} >Zbiórki charytatywne</Text>
      <LineChart
    data={{
      labels: ["Złom", "Makulatura", "Nakrętki"],
      datasets: [
        {
          data: [
            389,4270,80
          ]
        }
      ]
    }}
    width={600} // from react-native
    height={300}
    yAxisLabel=""
    yAxisSuffix="kg"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "white",
      backgroundGradientFrom: "white",
      backgroundGradientTo: "white",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(47, 215, 86, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "1",
        stroke: "#2fd756"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      
    }}
  />
  
      </View>
      <View style={[styles.wykres, {marginLeft: 50}]}>
      <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 20,}}>W mieście:</Text>
        <View style={{flexDirection: 'row'}}>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 15,}}>Pojemnikow na metale:</Text>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 15,}}>346</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 15,}}>Pojemników na szkło:</Text>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 15,}}>176</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 15,}}>Pojemników na papier:</Text>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 15,}}>176</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 15,}}>Pojemników na BIO:</Text>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 15,}}>171</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 15,}}>Pojemników na mieszane:</Text>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 15,}}>309</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 15,}}>Pojemników na leki:</Text>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 15,}}>49</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 15,}}>Pojemników na baterie:</Text>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 15,}}>51</Text>
       </View>
      </View>
    </View>

    <View style={{flexDirection: 'row-reverse'}}>
      <View style={styles.wykres}>
        <Image style={{width: 400, height: 200, resizeMode: 'contain'}} source={require('../assets/kolo.png')}/>
      </View>
      <View style={[styles.wykres, {marginRight: 50}]}>
      <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'red', fontSize: 20, marginBottom: 20,}}>COVID-19</Text>

      <View style={{flexDirection: 'row'}}>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 15,}}>Na kwarantannie:</Text>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 15,}}>201</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 15,}}>W ilozatorium:</Text>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 15,}}>41</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 15,}}>W stacjonarnym izolatorium:</Text>
       <Text style={{fontFamily: 'rubikLight', padding: 5, color: 'black', fontSize: 15,}}>8</Text>
       </View>
        </View>
</View>

    </View>
    }
     {this.state.deklaracjeColor &&
      <View style={{justifyContent: 'center', alignItems: 'center', }} >
        <View style={{alignSelf: 'flex-start'}}>
          <Text style={{fontFamily: 'rubikLight', padding: 5, color: '#2fd756', fontSize: 25,}} >Wyszukaj deklaracje</Text>
        </View>
        <View style={styles.deklaracjaSearch}>
          <TextInput 
          style={{height: 50, width: windowWidth*0.5, fontSize: 20, marginLeft :20, color: 'black', outline: "none"}}
          placeholderTextColor='#808080'
          placeholder="Wyszukaj po adresie"
          underlineColor='transparent'

          /> 
         
        </View>
         <View style={{flexDirection: 'row', width: windowWidth*0.6,
    padding: 5,
    borderBottomWidth:3,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#2fd756',}}>
          <Text style={{fontFamily: 'rubikRegular', color: '#2fd756', fontSize: 15, paddingHorizontal: 10}}> Filtruj:</Text>
            <Text style={{fontFamily: 'rubikLight', color: '#808080', fontSize: 15, paddingHorizontal: 10}} >Jest deklaracjia</Text>
          <TouchableOpacity onPress={() => this.setState({filtrjest: !this.state.filtrjest, filtrzero: false, filtrbrak: false, filtrseg: false, filtrsegbrak: false})}>
          <View style={{backgroundColor: (this.state.filtrjest) ? '#2fd756' : 'transparent', width: 18, height: 18, borderWidth: 0.6, borderRadius: 15, marginRight: 10, borderColor: '#2fd756'}}></View>
          </TouchableOpacity>
          <Text style={{fontFamily: 'rubikLight', color: '#808080', fontSize: 15, paddingHorizontal: 10}} >Brak deklaracji</Text>
          <TouchableOpacity onPress={() => this.setState({filtrbrak: !this.state.filtrbrak, filtrzero: false,  filtrjest: false, filtrseg: false, filtrsegbrak: false})}>
          <View style={{backgroundColor: (this.state.filtrbrak) ? '#2fd756' : 'transparent', width: 18, height: 18, borderWidth: 0.6, borderRadius: 15, marginRight: 10, borderColor: '#2fd756'}}></View>
          </TouchableOpacity>
          <Text style={{fontFamily: 'rubikLight', color: '#808080', fontSize: 15, paddingHorizontal: 10}} >Jest segregowane</Text>
          <TouchableOpacity onPress={() => this.setState({filtrseg: !this.state.filtrseg, filtrzero: false,  filtrbrak: false, filtrjest: false, filtrsegbrak: false})}>
          <View style={{backgroundColor: (this.state.filtrseg) ? '#2fd756' : 'transparent', width: 18, height: 18, borderWidth: 0.6, borderRadius: 15, marginRight: 10, borderColor: '#2fd756'}}></View>
          </TouchableOpacity>
          <Text style={{fontFamily: 'rubikLight', color: '#808080', fontSize: 15, paddingHorizontal: 10}} >Brak segregacji</Text>
          <TouchableOpacity onPress={() => this.setState({filtrsegbrak: !this.state.filtrsegbrak, filtrzero: false,  filtrbrak: false, filtrseg: false, filtrjest: false})}>
          <View style={{backgroundColor: (this.state.filtrsegbrak) ? '#2fd756' : 'transparent', width: 18, height: 18, borderWidth: 0.6, borderRadius: 15, marginRight: 10, borderColor: '#2fd756'}}></View>
          </TouchableOpacity>
          </View>
        <View style={styles.deklaracjaCon}>
      {this.state.filtrzero &&
      <View style={{height: windowHeight*0.5}}>
        <FlatList
        data={this.state.deklaracjeBaza}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
      }
       {this.state.filtrbrak &&
      <View>
       <View style={{height: windowHeight*0.5}}>
        <FlatList
        data={this.state.deklaracjeBaza}
        renderItem={renderItemBrak}
        keyExtractor={item => item.id}
      />
      </View>
      </View>
      }
      {this.state.filtrjest &&
      <View>
               <View style={{height: windowHeight*0.5}}>

        <FlatList
        data={this.state.deklaracjeBaza}
        renderItem={renderItemJest}
        keyExtractor={item => item.id}
      />
      </View>
      </View>
      }
       {this.state.filtrseg &&
      <View>
               <View style={{height: windowHeight*0.5}}>

        <FlatList
        data={this.state.deklaracjeBaza}
        renderItem={renderItemSeg}
        keyExtractor={item => item.id}
      />
      </View>
      </View>
      }
       {this.state.filtrsegbrak &&
      <View>
               <View style={{height: windowHeight*0.5}}>

        <FlatList
        data={this.state.deklaracjeBaza}
        renderItem={renderItemSegBrak}
        keyExtractor={item => item.id}
      />
      </View>
      </View>
      }
        </View>
          <View style={styles.pokazdek}>
              {this.state.wybdek &&
              <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                  <Text style={{color: 'rgba(0,0,0,0.2)', fontFamily: 'rubikLight', fontSize: 30}}>Wybierz deklaracje</Text>
              </View>
              }
               {this.state.wybniedek &&
              <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#2fd756', fontFamily: 'rubikLight', fontSize: 18}}>Adres: </Text>
                  <Text style={{color: 'back', fontFamily: 'rubikLight', fontSize: 16}}>{this.state.adresDek}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#2fd756', fontFamily: 'rubikLight', fontSize: 18}}>Typ: </Text>
                  <Text style={{color: 'back', fontFamily: 'rubikLight', fontSize: 16}}>{this.state.miejsceDek}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#2fd756', fontFamily: 'rubikLight', fontSize: 18}}>Iość osób: </Text>
                  <Text style={{color: 'back', fontFamily: 'rubikLight', fontSize: 16}}>{this.state.iloscOsob}</Text>
                  </View>
              </View>
              }

          </View>
      </View>
     }
     {this.state.dodajzbiorkeColor &&
    <View >
    {this.state.zglosCos &&
    <View>
      <View style={{  width: windowWidth*0.6}}><Text style={{color: '#2fd756', fontFamily: 'rubikMedium', fontSize: 25}}>Dodaj informację</Text></View>
<Text style={{color: 'black', fontFamily: 'RubikLight', fontSize: 20, marginBottom: 40}}>Wybierz rodzaj infromacji, jaki chcesz dodać</Text>
    <View style={{justifyContent: 'center', alignItems: 'center',}}>
      <TouchableOpacity onPress={() => this.setState({zglosCos: false, zglosCosEkran:true})}>
        <View 
        style={{padding: 40, backgroundColor: '#2fd756', borderWidth:0, borderRadius: 15, marginVertical:15, width: windowWidth*0.25, justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10, }}> 
            <Text style={{color: 'white', fontFamily: 'rubikLight', letterSpacing: 2, fontSize: 20}}>Zbiórka surowców</Text>
        </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.setState({zglosCos: false, zglosCosEkran: true})}>
        <View style={{padding: 40, backgroundColor: '#2fd756', borderWidth:0, borderRadius: 15, marginVertical: 15,width: windowWidth*0.25, justifyContent: 'center', alignItems: 'center',shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,  }}> 
            <Text style={{color: 'white', fontFamily: 'rubikLight', letterSpacing: 2, fontSize: 20}}>Anomalia</Text>
        </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.setState({zglosCos: false, zglosCosEkran: true})}>
        <View style={{padding: 40, backgroundColor: '#2fd756', borderWidth:0, borderRadius: 15, marginVertical: 15,width: windowWidth*0.25, justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,  }}> 
            <Text style={{color: 'white', fontFamily: 'rubikLight', letterSpacing: 2, fontSize: 20}}>Odpady medyczne</Text>
        </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.setState({zglosCos: false, zglosCosEkran: true})}>
        <View style={{padding: 40, backgroundColor: '#2fd756', borderWidth:0, borderRadius: 15, marginVertical: 15,width: windowWidth*0.25, justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,  }}> 
            <Text style={{color: 'white', fontFamily: 'rubikLight', letterSpacing: 2, fontSize: 20}}>Kwarantanna</Text>
        </View>
        </TouchableOpacity>

    </View>
    </View>
    }
    {this.state.zglosCosEkran &&
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: windowWidth*0.6, borderRadius: 15, borderWidth:2, borderColor: '#2fd756', justifyContent: 'center', alignItems: 'center', paddingVertical :50, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,}}>
        <Text style={{fontSize: 30, fontFamily: 'rubikRegular', color: 'black', letterSpacing: 3}}>Zgłoś</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderBottomWidth: 1, borderColor: '#2fd756', padding : 0, marginVertical: 20, marginHorizontal: 10}}>
          <TextInput 
           style={{height: 50, width: 300, fontSize: 20, marginLeft :20, color: 'black', outline: "none"}}
           placeholderTextColor='black'
           placeholder="Jan Kowalski"
           onChangeText={text => this.setState({imie: text})}
           defaultValue={this.state.imie}
          />
          </View>
          <View style={{borderBottomWidth: 1, borderColor: '#2fd756', padding : 0, marginVertical: 20, marginHorizontal: 10}}>
          <TextInput 
           style={{height: 50, width: 300, fontSize: 20, marginLeft :20, color: 'black', outline: "none"}}
           placeholderTextColor='black'
           placeholder="Numer telefonu"
           onChangeText={text => this.setState({numertelefonu: text})}
           defaultValue={this.state.numertelefonu}
          />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderBottomWidth: 1, borderColor: '#2fd756', padding : 0, marginVertical: 20, marginHorizontal: 10}}>
          <TextInput 
           style={{height: 50, width: 250, fontSize: 20, marginLeft :20, color: 'black', outline: "none"}}
           placeholderTextColor='black'
           placeholder="Ulica"
           onChangeText={text => this.setState({ulica: text})}
           defaultValue={this.state.ulica}
          />
          </View>
          <View style={{borderBottomWidth: 1, borderColor: '#2fd756', padding : 0, marginVertical: 20, marginHorizontal: 10}}>
          <TextInput 
           style={{height: 50, width: 150, fontSize: 20, marginLeft :20, color: 'black', outline: "none"}}
           placeholderTextColor='black'
           placeholder="Numer budybku"
           onChangeText={text => this.setState({budynek: text})}
           defaultValue={this.state.budynek}
          />
          </View>
          <View style={{borderBottomWidth: 1, borderColor: '#2fd756', padding : 0, marginVertical: 20, marginHorizontal: 10}}>
          <TextInput 
           style={{height: 50, width: 150, fontSize: 20, marginLeft :20, color: 'black', outline: "none"}}
           placeholderTextColor='black'
           placeholder="Numer lokalu"
           onChangeText={text => this.setState({lokal: text})}
           defaultValue={this.state.lokal}
          />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderBottomWidth: 1, borderColor: '#2fd756', padding : 0, marginVertical: 20, marginHorizontal: 10}}>
          <TextInput 
           style={{height: 50, width: 650, fontSize: 20, marginLeft :20, color: 'black', outline: "none"}}
           placeholderTextColor='black'
           placeholder="Opis zgłoszenia"
           onChangeText={text => this.setState({opis: text})}
           defaultValue={this.state.opis}
          />
          </View>
          
        </View>
      </View>
      <View style={{flexDirection: 'row',}}>
      <TouchableOpacity onPress={() => {
        this.setState({zglosCosEkran: false, dzieki: true})
        firebase.firestore().collection('zgloszenia').doc(this.state.ulica).set({
          imie: this.state.imie,
          ulica: this.state.ulica,
          budynek: this.state.budynek,
          lokal: this.state.lokal,
          opis: this.state.opis
        }).then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
        }}>
      <View style={{padding: 10, backgroundColor: '#2fd756', borderWidth: 0, borderRadius: 15, marginTop: 20, justifyContent:'flex-start', alignSelf: 'flex-start'}}><Text style={{color: 'white', fontSize: 22, fontFamily: 'rubikLight', letterSpacing:2}}>Zgłoś</Text></View>
     </TouchableOpacity>
      </View>
    </View>
    }
  {this.state.dzieki &&
  <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontFamily: 'rubikLight', fontSize: 30, marginVertical: 10}}>Dziękujemy za zgłoszenie!</Text>
    <TouchableOpacity style={{borderBottomWidth:1, borderColor: '#2fd756'}} onPress={() => {this.setState({dzieki: false, zglosCos: true})}}>
      <Text style={{fontFamily: 'rubikLight', fontSize: 15, color: '#2fd756'}}> Wyślij kolejne zgłoszenie.</Text>
    </TouchableOpacity>
  </View>
  }

    </View>
    }
    {this.state.zatwierdzColor &&
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View><Text style={{fontSize: 30, fontFamily: 'rubikRegular', color: '#2fd756'}}>Zatwierdź zgłoszenia</Text></View>
      <FlatList
      style={{width: windowWidth*0.5, height: windowHeight*0.7}}
        data={this.state.zgloszeniaBaza}
        renderItem={renderItemZgloszenia}
        keyExtractor={item => item.id}
      />
    </View>
    }
    {this.state.covidColor &&
    <View style={{justifyContent: "center", alignItems: 'center'}}>
      <View style={{width: windowWidth*0.6}}>
      <Text style={{color: '#2fd756', fontFamily: 'rubikRegular', letterSpacing: 3, fontSize: 25}}>Wykaz osób na kwarantannie</Text>
      </View>
      <View style={{width: windowWidth*0.6, height: windowHeight*0.7}}>
      <View style={{backgroundColor}}>

      </View>

      </View>
    </View>
    }
        </View>
  
    </View>
   
    );
  }
}

const styles = StyleSheet.create({
    container: {
       
        backgroundColor: '#f5f5f5',
        flex: 1,
        flexDirection: 'row'
      },
      mapStyle: {
        flex:1
      },
      panelboczny:{
        width: Dimensions.get('window').width*0.25,
        height: Dimensions.get('window').height,

        alignSelf: 'flex-start',
        
        paddingLeft: 20,
        paddingTop: 20
      },
      zakladka:{
        paddingTop: 30
      },
      textZak: {
            color: 'white',
            fontSize: 25
      },
      logoContener:{
        paddingLeft: 60,
        paddingTop: 30,
        flexDirection: 'row'
      },
      containerMenu:{
        paddingLeft: 80,
        paddingTop: 100
      },
      mapyText:{
        fontSize: 22,
        fontFamily: 'rubikLight'
      },
      panelGlowny:{
        backgroundColor: 'white',
        width: windowWidth*0.75,
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
      contenerButton:{
        padding: 15,
       borderTopLeftRadius: 30,
       borderBottomLeftRadius:30,
       marginBottom: 20
      },
      mapContener: {
        width: windowWidth*0.66,
        height: windowHeight*0.5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        
        elevation: 14,
        
      },
      markeryContener: {
        flexDirection: 'column',
        marginBottom:5,
        paddingBottom: 10,
      //  marginLeft: -250,
      width: windowWidth*0.66,

      },
      rodzajmarker1:{
        borderWidth: 1,
      borderRadius: 15,
      borderColor: '#2fd756',
      height: 16,
      width: 16,
      marginRight: 20,
      },
      rodzajmarker2:{
        borderWidth: 1,
      borderRadius: 15,
      borderColor: '#2fd756',
      height: 16,
      width: 16,
      marginHorizontal: 20,
      },
      markery1: {
     
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#2fd756',
      height: 20,
      width: 20,
      marginRight: 20,



      },
    
      markery2: {
        borderWidth: 1,
      borderRadius: 15,
      borderColor: '#2fd756',
      height: 20,
      width: 20,
      marginHorizontal: 20,
        
        },
        markery3: {
          borderWidth: 1,
      borderRadius: 15,
      borderColor: '#2fd756',
      height: 20,
      width: 20,
      marginHorizontal: 20,

          
          },
          markery4: {
            borderWidth: 1,
      borderRadius: 15,
      borderColor: '#2fd756',
      height: 20,
      width: 20,
      marginHorizontal: 20,

            
            },
      textMarkery: {
        fontFamily: 'rubikLight',
        fontSize: 15
      },
      textMarkery2: {
        fontFamily: 'rubikLight',
        fontSize: 14
      },
      info:{
        borderWidth:0,
        width: windowWidth*0.3,
        height: windowHeight*0.2,
        flexDirection: 'row',
        borderRadius: 30,
        padding: 10,
        justifyContent: 'center',
        shadowColor: "#000",
        alignItems: 'flex-start',
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,
        
      },
      podMapa:{
        marginTop: 20,
        alignSelf: 'center'
      },
  
  wykres:{
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    marginBottom: 60,
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,
borderWidth: 0,
borderRadius: 35,
padding: 10
  },
  deklaracjaSearch:{
    width: windowWidth*0.6,
    padding: 0,
    borderColor: '#2fd756',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopWidth:3,
    borderLeftWidth: 3,
    borderRightWidth:3,
    borderBottomWidth: 1
    

  },
  deklaracjaCon:{
    borderBottomLeftRadius: 15,
    borderBottomRightRadius:15,
    width: windowWidth*0.6,
    height:windowHeight*0.5,
    marginBottom: 30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
pokazdek:{
  justifyContent: 'center',
  alignItems: 'center',
 borderRadius: 15,
  width: windowWidth*0.6,
  height:windowHeight*0.2,
  shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
}


});