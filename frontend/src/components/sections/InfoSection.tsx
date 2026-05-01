import { SectionTitle } from '../ui/'
import { View } from 'react-native'

interface InfoSectionProps {
   children: React.ReactElement
   title: string
}

export default function InfoSection({ children, title }: InfoSectionProps) {
   return (
      <View>
         <SectionTitle style={{ fontSize: 22 }}>{title}</SectionTitle>
         {children}
      </View>
   )
}
