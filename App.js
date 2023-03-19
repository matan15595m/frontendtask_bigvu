import { StyleSheet, Text, View,FlatList, Platform,ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './components/MainScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import CourseChapters from './components/CourseChapters.js';

const Stack = createNativeStackNavigator()
export default function App() {
  return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{}}>
          <Stack.Screen name='MainScreen' component={MainScreen} options={{title:'BIGVU Courses' ,headerStyle:{backgroundColor:'#b366ff'}}}/>
          <Stack.Screen name='CourseChapters' component={CourseChapters} options={{title:'Chapters',headerStyle:{backgroundColor:'#b366ff'}}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
  
}

