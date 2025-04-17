import React from 'react';
import {View} from 'react-native';

const FixedDimensionsBaics = () => {
  return (
    <View>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
    </View>
  );
};

const FlexDimensionsBasics = () => {
  return (
    <View style={{height: 300}}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    </View>
  );
};

const PercentageDimensionsBasics = () => {
  return (
    <View style={{height: '50%', width: '50%'}}>
      <View style={{height: '15%', backgroundColor: 'red'}} />
      <View style={{width: '66%', height: '35%', backgroundColor: 'skyblue'}} />
      <View
        style={{width: '33%', height: '60%', backgroundColor: 'steelblue'}}
      />
    </View>
  );
};

// export default FixedDimensionsBaics;
export default PercentageDimensionsBasics;
