import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    marginHorizontal: deviceWidth.width * 0.04,
    flex: 1,
    marginVertical: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    height: deviceWidth.height / 5,
    width: deviceWidth.width * 0.92,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  infocontainer: {
    position: 'absolute',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    width:'100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});