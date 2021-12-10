import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.style';

function MealCard({meal, onSelect}) {
  
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{uri: meal.strMealThumb}} style={styles.image}></Image>
        <View style={styles.infocontainer}>
          <Text style={styles.textStyle} numberOfLines={1}>
            {meal.strMeal}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MealCard;