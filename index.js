/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatListBasics from './FlatListBasics';
import SectionListBasics from './SectionListBasics';

AppRegistry.registerComponent(appName, () => SectionListBasics);
