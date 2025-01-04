import {StyleSheet, View} from 'react-native';

export const Task4 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'column',
  },
  box: {
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    flex: 1
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    flex: 1
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    flex: 2
  },
});
