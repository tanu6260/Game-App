import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constans";

const FilterBox = ({ visible, onClose, onApplyFilter, selectedFilter }) => {
  if (!visible) return null; 

  return (
    <View style={styles.popbox}>
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>Filter by Role</Text>
        {["All", "Forward", "Defender", "Goalkeeper", "batsman"].map(
          (category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.menuItem,
                selectedFilter === category && styles.activeMenuItem,
              ]}
              onPress={() => onApplyFilter(category)}
            >
              <Text style={styles.menuItemText}>{category}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
};

export default FilterBox;

const styles = StyleSheet.create({
    popbox: {
        position: "absolute",
        top: SIZES.height * 0.006,
        right: SIZES.width * 0.05,
        width: SIZES.width * 0.4,
        borderRadius: 8,
        backgroundColor: COLORS.white,
        elevation: 5,
        alignItems:'center',
      },
  menuTitle: {
    fontSize:  SIZES.width * 0.042,
    fontFamily:FONTS.semiBold, 
    color:COLORS.blue2, 
    alignItems:'center',
  },
  menuItem: {
    padding:  SIZES.width * 0.012,
  },
  activeMenuItem: {
    backgroundColor: COLORS.lightGray1,
    borderRadius: 3,
  },
  menuItemText: {
    fontSize: SIZES.width * 0.035,
    color: COLORS.black,
    fontFamily:FONTS.medium, 
  },

});
