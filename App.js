//IMPORTES TRADICIONAIS
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

//IMPORTES DO NAVIGATION E DO TIPO DE NAVIGATOR UTILIZADO AQUI, O DRAWER NAVIGATOR
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//CRIAÇÃO DO "DRAWER NAVIGATOR"
const Drawer = createDrawerNavigator();

//TELA "HOME" APENAS
function TelaHome({navigation}){
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', }} >  
      <Text>Tela home</Text>
    </View>
  );
}

//TELA "SEGUNDA TELA" APENAS
function SegundaTela({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Segunda Tela</Text>
    </View>
  );
}

export default function App() {
  return (
    //CRIOU-SE O NAVIGATION CONTAINER
    <NavigationContainer>
      {/*CRIOU-SE O NAVIGATOR COM O NOME ATRIBUÍDO ARBITRÁRIO (NESSE CASO DRAWER)*/}
        <Drawer.Navigator>
          {/*"CATALOGAÇÃO" DAS SCREENS*/}
          <Drawer.Screen name='Home' component={TelaHome}/>
          <Drawer.Screen name='Segunda Tela' component={SegundaTela}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
