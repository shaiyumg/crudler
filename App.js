import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import moduleListScreen from './src/components/screens/moduleListScreen';
import moduleAddScreen from './src/components/screens/moduleAddScreen';
import moduleViewScreen from './src/components/screens/moduleViewScreen';
import moduleModifyScreen from './src/components/screens/moduleAddScreen';

const Stack = createNativeStackNavigator();
 const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='moduleAddScreen'
    screenOptions={{
      headerStyle: {backgroundColor: 'black'},
      headerTintColor: 'white',
    }}
    >

    <Stack.Screen
    name='moduleListScreen'
    component={moduleListScreen}
    options={{title: 'List modules'}}
    />
    <Stack.Screen
    name='moduleAddScreen'
    component={moduleAddScreen}
    options={{title: 'Add module'}}
    />
    <Stack.Screen
    name='moduleViewScreen'
    component={moduleViewScreen}
    options={{title: 'View modules'}}
    />
    <Stack.Screen
    name='moduleModifyScreen'
    component={moduleModifyScreen}
    options={{title: 'Modify module'}}
    />
    

    </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;
