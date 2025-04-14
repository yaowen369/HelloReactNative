import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: '1-1'},
          {key: '1-2'},
          {key: '1-3'},
          {key: '1-4'},
          {key: '1-5'},
          {key: '1-6'},
          {key: '1-7'},
          {key: '1-8'},
          {key: '1-9'},
        ]}
        renderItem={({item}) => <Text style={styles.item}> {item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
