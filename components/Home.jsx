import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default Home = () => {
  const renderCategoryItem = item => {
    return (
      <View>
        <Text>Hi </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>

      {/* Title Section */}
      <View style={styles.textWrapper}>
        <Text style={styles.textSubtitle}>Food</Text>
        <Text style={styles.textTitle}>Delivery</Text>
      </View>

      {/* Search Box */}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>

      {/* Categories Data */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesText}>Categories</Text>
        <View style={styles.categoriesListWrappers}>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Header Section
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  // Title Section
  textWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  textSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: Colors.textDark,
  },
  textTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: Colors.textDark,
    marginTop: 5,
  },

  // Search Section
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textDark,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 5,
  },

  // Categories Section
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
    paddingHorizontal: 20,
  },
  categoriesListWrappers: {},
});
