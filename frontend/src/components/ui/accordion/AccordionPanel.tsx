import { Pressable, StyleSheet, View } from 'react-native'
import { SectionTitle } from '../typography/SectionTitle'
import { ReactNode, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

interface AccordionPanelProps {
   title: string
   children: ReactNode
}

export const AccordionPanel = ({ title, children }: AccordionPanelProps) => {
   const [isExpanded, setIsExpanded] = useState(false)

   return (
      <View style={styles.container}>
         <Pressable onPress={() => (!isExpanded ? setIsExpanded(true) : setIsExpanded(false))}>
            <View style={styles.header}>
               <SectionTitle
                  style={styles.title}
                  containerStyle={!isExpanded && styles.notExpanded}
                  right={
                     <Ionicons
                        style={styles.icon}
                        name={!isExpanded ? 'chevron-down-outline' : 'chevron-up-outline'}
                     />
                  }
               >
                  {title}
               </SectionTitle>
            </View>
         </Pressable>
         {isExpanded && <View>{children}</View>}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {},
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   title: {
      fontSize: 22,
      justifyContent: 'space-between',
   },
   icon: {
      fontSize: 20,
      textAlign: 'right',
   },
   notExpanded: {
      paddingBottom: 0,
   },
})
