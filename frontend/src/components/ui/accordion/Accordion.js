import { StyleSheet, Text } from 'react-native'
import { AccordionPanel } from './AccordionPanel'
import { View } from 'react-native'
import { SectionDivider } from '../layout/SectionDivider'

export const Accordion = ({ title, children }) => {
   return (
      <>
         <AccordionPanel title={title}>{children}</AccordionPanel>
         <SectionDivider />
      </>
   )
}
