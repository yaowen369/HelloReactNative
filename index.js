/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionsBaics from './DimensionsBasics';
import FlexDimensionsBasics from './DimensionsBasics';
import PercentageDimensionsBasics from './DimensionsBasics';

AppRegistry.registerComponent(appName, () => PercentageDimensionsBasics);
