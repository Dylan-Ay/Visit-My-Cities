import { AccordionPanel } from './AccordionPanel'

interface AccordionProps {
   title: string
   children: React.ReactElement
}

export const Accordion = ({ title, children }: AccordionProps) => {
   return (
      <>
         <AccordionPanel title={title}>{children}</AccordionPanel>
      </>
   )
}
