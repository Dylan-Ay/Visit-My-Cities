import { ReactNode } from 'react'
import { AccordionPanel } from './AccordionPanel'

interface AccordionProps {
   title: string
   children: ReactNode
}

export const Accordion = ({ title, children }: AccordionProps) => {
   return (
      <>
         <AccordionPanel title={title}>{children}</AccordionPanel>
      </>
   )
}
