import { StyleSheet, Text } from 'react-native'
import { ContentContainer } from '../layout/ContentContainer'

interface NoContentTextProps {
   elementTitle: string
}

export const NoContentText = ({ elementTitle }: NoContentTextProps) => {
   return (
      <ContentContainer>
         <Text style={styles.defaultText}>
            Aucun monument ou bâtiment n'a encore été enregistré pour
            <Text style={styles.heroTitle}> "{elementTitle}"</Text>.
         </Text>
      </ContentContainer>
   )
}

const styles = StyleSheet.create({
   defaultText: {
      textAlign: 'center',
      marginTop: 40,
   },
   heroTitle: {
      fontWeight: 700,
   },
})
