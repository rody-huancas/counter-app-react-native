import {StyleSheet, View} from 'react-native';

export const Task3 = () => {
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
    justifyContent: "space-between",
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    alignSelf: "flex-end"
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    alignSelf: "center"
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
});
