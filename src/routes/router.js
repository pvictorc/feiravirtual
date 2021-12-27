import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
// importar nossas páginas(rotas)
import Home from "../pages/Home";
import Categorias from "../pages/Categorias";
import Feira from "../pages/Feira";
import Perfil from "../pages/Perfil";
import ProdutosLista from "../pages/ProdutosLista";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
                    component={CategoriasStack}
                    options= {{ 
                        tabBarIcon: ({size, color}) => (
                            <Entypo name="shop" size={size} color={color} />
                        ),
                        headerShown: false
                    } 
                } 
                />
                {/* apenas teste, será removido */}
                <Tab.Screen 
                    name="Lista de Produtos"
                    component={ProdutosLista}
                    options= {{ 
                        tabBarIcon: ({size, color}) => (
                            <Entypo name="list" size={size} color={color} />
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

function CategoriasStack(props) {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Categorias " component={Categorias} />
        <Stack.Screen name="Produtos" component={ProdutosLista}/>
    </Stack.Navigator>
    );
}
