import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import {
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   View,
} from 'react-native'

export const FormInput = ({
   label,
   placeholder,
   keyboardType,
   secureTextEntry = false,
   icon,
   returnKeyType,
}) => {
   const [isIcon, setIcon] = useState('')
   const [value, setValue] = useState('')

   const handleChangeText = (text) => {
      setValue(text)

      if (isIcon == '') {
         setIcon(icon)
      }

      if (text == '') {
         setIcon('')
      }
   }

   const handleIconPress = () => {
      setValue('')
      setIcon('')
   }

   return (
      <View style={styles.container}>
         <Text style={styles.label}>{label}</Text>
         <View style={styles.inputContainer}>
            <TextInput
               style={styles.input}
               placeholder={placeholder}
               keyboardType={keyboardType}
               secureTextEntry={secureTextEntry}
               onChangeText={handleChangeText}
               value={value}
               returnKeyType={returnKeyType}
               placeholderTextColor={'#a4a8b1c2'}
            />
            {value != '' && (
               <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={handleIconPress}
               >
                  <Ionicons style={styles.icon} name={isIcon} />
               </TouchableOpacity>
            )}
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      gap: 8,
   },
   label: {
      fontWeight: 600,
      fontSize: 16,
   },
   inputContainer: {
      flexDirection: 'row',
      height: 50,
      paddingLeft: 10,
      borderRadius: 8,
      backgroundColor: 'white',
      borderWidth: 0.3,
      borderColor: '#6B7280',
   },
   input: {
      flex: 1,
   },
   iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
   },
   icon: {
      fontSize: 24,
   },
})
