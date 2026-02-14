import { AccordionPanel } from './AccordionPanel'
import { SectionDivider } from '../layout/SectionDivider'

export const Accordion = ({ title, children }) => {
   return (
      <>
         <AccordionPanel title={title}>{children}</AccordionPanel>
      </>
   )
}
