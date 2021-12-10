import React from 'react';
import {View, Text, Image,} from 'react-native';
import Button from '../../Components/Button/Button';
import styles from './DetailCard.style';

function DetailCard({selectedMeal,onPress}) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: selectedMeal.strMealThumb}}
        style={styles.image}></Image>

      <View style={styles.infocontainer}>
        <Text style={styles.textStyleForMealName} numberOfLines={1}>
          {selectedMeal.strMeal}
        </Text>
        <Text style={styles.textStyleforCountry} numberOfLines={1}>
          {selectedMeal.strMeal}
        </Text>
      </View>
      <View style={styles.descriptioncontainer}>
        <Text>{selectedMeal.strInstructions}</Text>
        <Button title="Watch on Youtube" onPress={onPress}></Button>
      </View>
    </View>
  );
}

export default DetailCard;