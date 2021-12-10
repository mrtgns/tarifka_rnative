import React from 'react';
import {View, Text, FlatList, Linking} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch';


import DetailCard from '../../Card/DetailCard/DetailCard';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';

function MealDetail({route, navigation}) {
  const {mealId} = route.params;

  const {data,loading,error} = useFetch(`${Config.API_URL}lookup.php?i=${mealId}`);
  function onButtonPressed(itemYoutubeUrl) {
    Linking.openURL(itemYoutubeUrl);
  }

  function renderMeals({item}) {
    return (
      <DetailCard
        selectedMeal={item}
        onPress={() => onButtonPressed(item.strYoutube)}></DetailCard>
    );
  }
  if (loading) {
    return <Loading></Loading>; 
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderMeals}></FlatList>
    </View>
  );
}

export default MealDetail;
