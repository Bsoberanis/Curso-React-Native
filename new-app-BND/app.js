import { StatusBar } from 'expo-status-bar';
import { StyleSheet , text , view } from 'react-native';     
import MainStackNavigator from './navigation/MainNavigator.js';



export default function App() {
    return (
       <MainStackNavigator/>
    );
}

