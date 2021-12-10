import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';
import CategoryCard from '../../Card/CategoryCard/CategoryCard';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import useFetch from '../../Hooks/useFetch';

const URL = `${Config.API_URL}categories.php`;

function Categories({navigation}) {
  const {data, loading, error} = useFetch(URL);

  const handleCategorySelect = categoryName => {
    navigation.navigate('Meals', {categoryName});
  };

  const renderCategories = ({item}) => {
    return (
      <CategoryCard
        category={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
    );
  };
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }
  return (
    <SafeAreaView>
      <FlatList data={data.categories} renderItem={renderCategories}></FlatList>
    </SafeAreaView>
  );
}

export default Categories;
