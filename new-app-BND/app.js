import { StatusBar } from 'expo-status-bar';
import { StyleSheet , text , view } from 'react-native';     

export default function App() {
    return (
        <view style={styles.container}>
        <text>Open up App.js to start working on your app!</text>
        <StatusBar style="auto" />
        </view>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});