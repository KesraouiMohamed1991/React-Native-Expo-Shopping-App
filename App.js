import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './Screens/Feed';
import Profiles from './Screens/Profiles';
import Setting from './Screens/Setting';
import Mix from './Screens/Mix';
import Search from './Screens/Search';

import shop from './reducers/shop';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';




export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();



  const colors = {
    text: '#010e17',
    background: '#f9fcff',
    primary: '#2196f7',
    secondary: '#fa78b9',
    accent: '#f9754e',
  };


  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = 'list';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            } else if (route.name === 'cart') {
              iconName = 'cart-plus';
            } else if (route.name === 'Search') {
              iconName = 'search';
            }
            return <FontAwesome name={iconName} size={size} color={color} />;

          },
          tabBarActiveTintColor: '#a2b3f9',
          tabBarInactiveTintColor: '#ee8d8dfb',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Feed} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profiles} />
        <Tab.Screen name="cart" component={Mix} />
      </Tab.Navigator>
    );
  }


  const store = configureStore({
    reducer: { shop },
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Settings" component={Setting} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );

}

