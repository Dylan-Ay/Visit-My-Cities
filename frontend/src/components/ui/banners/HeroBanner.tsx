import {
   StyleSheet,
   ImageBackground,
   Text,
   StyleProp,
   ImageStyle,
   ImageSourcePropType,
} from 'react-native'

interface HeroBannerProps {
   title: string
   image: ImageSourcePropType
   style?: StyleProp<ImageStyle>
}

export const HeroBanner = ({ title, image, style }: HeroBannerProps) => {
   return (
      <ImageBackground source={image} style={styles.banner}>
         <Text style={[styles.bannerText, style]}>{title}</Text>
      </ImageBackground>
   )
}

const styles = StyleSheet.create({
   banner: {
      height: 280,
      justifyContent: 'flex-end',
      paddingHorizontal: 16,
   },

   bannerContainer: {
      gap: 12,
      width: '100%',
   },

   bannerText: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      textShadowColor: 'rgba(0,0,0,0.9)',
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 6,
   },
})
