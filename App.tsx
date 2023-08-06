import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// screens
import Main from "@screens/Main";
import Meme from '@screens/Meme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Meme" component={Meme}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


