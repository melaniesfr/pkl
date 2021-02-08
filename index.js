/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

// LogBox.ignoreAllLogs();

LogBox.ignoreLogs(['Warning: Cannot update a component from inside the function body of a different component.']);

LogBox.ignoreLogs(["Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function."]);

AppRegistry.registerComponent(appName, () => App);