import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { colors } from '../styles/styles';

const Navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.pink
            },
            headerTintColor: colors.text
        }
    }
);

export default createAppContainer(Navigator);
