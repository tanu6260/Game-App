import {Text, Image, StyleSheet, View} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constans';


const PlayerCard = ({playerName, img ,role ,point}) => {;

  return (
    <View
      style={styles.imgcontainer}
      activeOpacity={0.5}>
      <Image source={img} style={styles.imgstyle} />
      <Text style={styles.title} numberOfLines={1}>Name : {playerName}</Text>
      <Text style={styles.title} numberOfLines={1}> Role : {role}</Text>
      <Text style={styles.title}>  Point : {point}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  imgcontainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.42,
    marginHorizontal: SIZES.width * 0.025,
    borderRadius: 10,
    elevation: 3,
    marginVertical:SIZES.height*0.015, 
   
  },
  imgstyle: {
    marginTop: SIZES.height * 0.015,
    height: SIZES.width * 0.35,
    width: SIZES.width * 0.35,
    resizeMode: 'cover',
  },
  title: {
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
    paddingHorizontal: SIZES.width * 0.03,
    fontFamily: FONTS.semiBold,
    width: SIZES.width * 0.4, 
    
  },
});
export default PlayerCard;