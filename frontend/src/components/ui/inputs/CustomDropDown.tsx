import { ReactNode } from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'

type PlacesDropDown = {
   label: string
   value: string
}

interface CustomDropDownProps {
   data: PlacesDropDown[]
   value: string
   onChange: (item: string) => void
   label: string
   placeholder: string
   containerStyle: StyleProp<ViewStyle>
   isLabel: boolean
   isSearch: boolean
   errorMessage: ReactNode
   isRequired: boolean
}

export const CustomDropDown = ({
   data,
   value,
   onChange,
   label,
   placeholder,
   containerStyle,
   isLabel = true,
   isSearch = true,
   errorMessage,
   isRequired,
}: CustomDropDownProps) => {
   return (
      <View style={[styles.container, containerStyle]}>
         {isLabel && (
            <Text style={styles.label}>
               {label} {isRequired && <Text style={styles.required}>*</Text>}
            </Text>
         )}
         <Dropdown
            style={styles.dropDown}
            search={isSearch}
            searchPlaceholder="Rechercher"
            placeholderStyle={styles.placeholderStyle}
            labelField="label"
            valueField="value"
            data={data}
            value={value}
            onChange={(item) => onChange(item.value)}
            placeholder={placeholder}
         />
         {errorMessage}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      gap: 9,
   },
   label: {
      fontWeight: 600,
      fontSize: 16,
   },
   dropDown: {
      height: 50,
      paddingHorizontal: 10,
      borderRadius: 8,
      backgroundColor: 'white',
      borderWidth: 0.3,
      borderColor: '#6B7280',
   },

   placeholderStyle: {
      color: '#888',
   },
   required: {
      color: 'red',
   },
})
