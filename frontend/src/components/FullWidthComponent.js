import { StyleSheet, View } from 'react-native'

export const FullWidthComponent = ({ children }) => {
  return (
    <View style={styles.fullWidth}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    marginHorizontal: -16
  }
})