import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList, ScreenEnum } from 'types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from 'screens/Home';
import { Email } from 'screens/Email';

const Tab = createBottomTabNavigator<RootStackParamList>();

interface Props {
  initialRoute: ScreenEnum.Home;
}

export const AppNavigation = ({ initialRoute }: Props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          tabBarIconStyle: { display: 'none' },
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontWeight: '700',
            fontSize: 15,
          },
        }}
      >
        <Tab.Screen name={ScreenEnum.Home} component={Home} />
        <Tab.Screen name={ScreenEnum.Email} component={Email} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
