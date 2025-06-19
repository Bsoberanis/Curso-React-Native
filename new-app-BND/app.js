import { StatusBar } from 'expo-status-bar';
import { StyleSheet , text , view } from 'react-native';     
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


// Removed duplicate App component with empty return
function HomeScreen() {
    return (
        <view style={styles.container}>
            <text>HomeScreen</text>
        </view>
    );
}

function NewScreen() {
    return (
        <view style={styles.container}>
            <text>NewScreen</text>
        </view>
    );
}
function SettingsScreen() {
    return (
        <view style={styles.container}>
            <text>SettingsScreen</text>
        </view>
    );
}

const Tab = createBottomTabNavigator();



function TabBarIcon({ name, focused, color, size }) {
    let iconName;

    if (name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
    } else if (name === 'New') {
        iconName = focused ? 'car' : 'car-outline';
    } else if (name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
    }

    return <Icon name={iconName} size={size} color={color} />;
}

function screenOptions({ route }) {
    return {
        tabBarIcon: (props) => <TabBarIcon {...props} name={route.name} />,
    };
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="New" component={NewScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
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