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
import ProductDetail from '../components/ProductDetail';
import ProdutosLista from "../components/ProdutosLista/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import CarrinhoIcone from '../components/CarrinhoIcone';
import Carrinho from "../components/Carrinho";
import Form from "../components/Form";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// usaremos o modelo tab navigator do react navigation
function Routes(props) {
    // chamar a tab navigator incluindo nossas rotas/páginas e estilizando a tab
    return(
            <Tab.Navigator screenOptions= {{
                tabBarStyle: {
                    backgroundColor: '#A20D15',
                    tabBarBorderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarActiveTintColor: '#FFF',
                showIcon: true
                

            }}>
                <Tab.Screen 
                    name="Início"
                    component={HomeStack}
                    options= {{ 
                        headerShown: false,
                        tabBarIcon: ({size, color}) => (
                            <Entypo name="home" size={size} color={color} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="Categorias"
                    component={CategoriasStack}
                    options= {{ 
                        tabBarIcon: ({size, color}) => (
                            <Entypo name="shop" size={size} color={color} />
                        ),
                        headerShown: false,
                    } 
                } 
                />
                <Tab.Screen 
                    name="Carrinho"
                    component={Carrinho}
                    options= {{ 
                        tabBarIcon: ({size, color}) => (
                            <Entypo name="shopping-cart" size={size} color={color} />
                        ),
                        headerShown: true
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
    <Stack.Navigator screenOptions={{
        headerRight: () => (
            <TouchableOpacity onPress={() => props.navigation.navigate('Carrinho')}>
                <CarrinhoIcone />
            </TouchableOpacity>
        ),
    }}>
        <Stack.Screen name="Categorias " component={Categorias} />
        <Stack.Screen name="Produtos" component={ProdutosLista}/>
        <Stack.Screen name="Detalhes" component={ProductDetail} />
        <Stack.Screen name="CarrinhoIcone" component={CarrinhoIcone} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Formulário de compra" component={Form} />
    </Stack.Navigator>
    );
}
function HomeStack(props) {
    return (
        <Stack.Navigator screenOptions={{
            headerRight: () => (
                <TouchableOpacity onPress={() => props.navigation.navigate('Carrinho')}>
                    <CarrinhoIcone />
                </TouchableOpacity>
            ),
        }}>
            <Stack.Screen name="Home " component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Produtos " component={ProdutosLista} />
            <Stack.Screen name="Detalhes" component={ProductDetail} />
            <Stack.Screen name="CarrinhoIcone" component={CarrinhoIcone} />
            <Stack.Screen name="Carrinho" component={Carrinho} />
            <Stack.Screen name="Formulário de compra" component={Form} />
        </Stack.Navigator>
    );
}
