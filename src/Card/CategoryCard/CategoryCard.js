import React from 'react';
import {View, Text, Image,TouchableWithoutFeedback} from 'react-native';
import styles from './Category.style';

function CategoryCard({category,onSelect}) {
  return (
      <TouchableWithoutFeedback onPress={onSelect}>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{uri: category.strCategoryThumb}} style={styles.image} />
        <Text style={styles.textStyle}>{category.strCategory}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;