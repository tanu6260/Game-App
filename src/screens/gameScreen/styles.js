import {StyleSheet} from 'react-native';
import { COLORS , FONTS , SIZES} from '../../constans';


const styles = StyleSheet.create({
  maincontenier: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innercontent: {
    width: SIZES.width * 0.95,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    marginBottom:SIZES.height*0.025, 
  },
 
  headerText: {
    marginTop: SIZES.height * 0.01,
    fontSize: SIZES.width * 0.05,
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
  textAlign:'center'
  },


  
});

export default styles;