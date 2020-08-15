import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Details from '../screens/details';

const App_Stack = createStackNavigator({
    Home: {
        screen: Home
    },
    Details: {
        screen: Details
    }
})

export default createAppContainer(
    App_Stack
);