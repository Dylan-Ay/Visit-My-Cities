import { View, StyleSheet, FlatList } from "react-native"

export const HorizontalList = ({ data, renderItem, keyExtractor }) => {
   return (
      <View style={styles.container}>
         <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
         />
      </View>
   ) 
}

const styles = StyleSheet.create({
   container: {
      marginVertical: 8
   }
})