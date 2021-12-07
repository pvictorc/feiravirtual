import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
// importar nossas páginas(rotas)
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Feira from "./pages/Feira";
import Perfil from "./pages/Perfil";

const Tab = createBottomTabNavigator();

// usaremos o modelo tab navigator do react navigation
function Routes() {
    // chamar a tab navigator incluindo nossas rotas/páginas e estilizando a tab

    return(      
        
            <Tab.Navigator screenOptions= {{
                tabBarStyle: {
                    backgroundColor: '#121212',
                    tabBarBorderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarActiveTintColor: '#FFF',
                showIcon: true
            }}>
                <Tab.Screen 
                    name="Pagina Inicial"
                    component={Home}
                    options= {{ 
                        headerShown: false,
                        tabBarIcon: ({size, color}) => (
                            <Entypo name="home" size={size} color={color} />
                        )   
                    }} 
                />
                <Tab.Screen 
                    name="Produtos"
                    component={Categorias}
                    onPress= {() => navigation.navigate('Produtos')}
                    options= {{ 
                        tabBarIcon: ({size, color}) => (
                            <Entypo name="shop" size={size} color={color} />
                        )     
                    }} 
                />
                <Tab.Screen 
                    name="Feira"
                    component={Feira}
                    options= {{ 
                        tabBarIcon: ({size, color}) => (
                            <Entypo name="calendar" size={size} color={color} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="Perfil"
                    component={Perfil}
                    options= {{ 
                        tabBarIcon: ({size, color}) => (
                            <Feather name="user" size={size} color={color} />
                        )
                    }} 
                />
            </Tab.Navigator>

    
    );

}

export default Routes;