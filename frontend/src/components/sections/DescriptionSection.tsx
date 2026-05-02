import { View } from 'react-native'
import { SectionTitle } from '../ui'
import { ExpandableText } from '../ui/typography/ExpandableText'

interface DescriptionSectionProps {
   linesNumber: number
   text: string
}

export default function DescriptionSection({ linesNumber, text }: DescriptionSectionProps) {
   return (
      <View>
         <SectionTitle style={{ fontSize: 22 }}>Description</SectionTitle>
         <ExpandableText linesNumber={linesNumber} text={text} />
      </View>
   )
}
