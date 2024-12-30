import {FlatList, View, StatusBar, TouchableOpacity, Text , BackHandler, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import PlayerCard from '../../componets/playerCard';
import { COLORS, data, SIZES } from '../../constans';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FilterBox from '../../componets/menu';

const GameScreen = ({ navigation }) => {
  const [filter, setFilter] = useState("All"); 
  const [filteredData, setFilteredData] = useState(data.imageData2);
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false); // State for menu visibility

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity activeOpacity={0.3} onPress={() => setIsFilterMenuVisible(true)}>
        <AntDesign name="filter" size={SIZES.width * 0.09} color={COLORS.black} />
      </TouchableOpacity>
    ),
  });


  const applyFilter = (category) => {
    setFilter(category);
    setIsFilterMenuVisible(false);
    if (category === "All") {
      setFilteredData(data.imageData2);
    } else {
      setFilteredData(data.imageData2.filter((player) => player.role === category));
    }
  };


  useEffect(() => {
    const backHandler = () => {
      if (isFilterMenuVisible) {
        setIsFilterMenuVisible(false);
        return true;
      }
      return false;
    };
  
    BackHandler.addEventListener("hardwareBackPress", backHandler);
    return () => BackHandler.removeEventListener("hardwareBackPress", backHandler);
  }, [isFilterMenuVisible]);
  

  return (
    <SafeAreaView style={styles.maincontenier}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <View style={styles.innercontent}>
        <Text style={styles.headerText}>Fantasy Cricket Game Screen</Text>

        {/* Player List */}
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={filteredData}
          numColumns={2}
          style={{ marginBottom:SIZES.height*0.04 }}
          renderItem={({ item, index }) => (
            <PlayerCard
              key={index}
              playerName={item.playerName}
              role={item.role}
              point={item.point}
              img={item.img}
            />
          )}
        />

        {/* Filter Menu */}
        <FilterBox
          visible={isFilterMenuVisible}
          onApplyFilter={applyFilter}
          selectedFilter={filter}
        />
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;