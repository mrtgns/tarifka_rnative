import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    
  },
  image: {
    height: deviceWidth.height / 4,
    width: deviceWidth.width,
    resizeMode: 'cover',
  },
  infocontainer: {
    padding: 10,
    borderBottomWidth:1,
    borderBottomColor:'gray'
  },
  textStyleForMealName: {
    color: '#f44336',

    fontWeight: 'bold',
    fontSize: 25,
  },
  textStyleforCountry: {
    color: '#f44336',

    fontWeight: 'bold',
    fontSize: 18,
  },descriptioncontainer:{
    margin:10,
    padding:10
  },
});