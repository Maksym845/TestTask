import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useGetPhotos } from 'hooks/useGetPhotos';
import { PhotoCard } from 'compoents/Home/PhotoCard';
import { IPhoto } from 'types/photos';
import { SearchBar } from 'compoents/Home/SearchBar';
import { MaterialButton } from 'compoents/Home/MaterialButton';


export const Home = () => {
  const { data, isError, isLoading, setFilterTitle } = useGetPhotos();

  const renderItem = useCallback(({ item }: {item: IPhoto}) => {
    return (
      <PhotoCard photo={item} />
    );
  }, []);

  return (
    <SafeAreaView>
      <SearchBar
        onChangeSearch={setFilterTitle}
        containerStyle={{ marginBottom: 20, marginHorizontal: 20 }}
      />
      <MaterialButton containerStyle={{ marginBottom: 20, marginHorizontal: 20 }}/>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.listStyle}
      />
      {isError && <Text>Something went wrong :(</Text>}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
          <ActivityIndicator />
        </View>
      )}
      {data?.length === 0 && <Text style={styles.infoText}>List is empty</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    paddingHorizontal: 20,
    gap: 20,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  infoText: {
    fontSize: 24,
    letterSpacing: 0.1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
