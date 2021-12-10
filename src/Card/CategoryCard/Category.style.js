import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    border: 1,
    borderWidth: 1,
    margin: 10,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    resizeMode: 'contain',
    width: deviceWidth.width / 6,
    minHeight: 60,
  },
  textStyle: {
    marginLeft: 5,
    fontSize: 20,
  },
});