import { AppRegistry } from 'react-native';
import App from './src/components/App';
import UserInfo from './src/components/UserInfo'
import { StackNavigator } from 'react-navigation';

const AppWithNav = StackNavigator({
    Login: {screen: App},
    UserInfo: {screen: UserInfo}
});

AppRegistry.registerComponent('GitHubClient', () => AppWithNav);
