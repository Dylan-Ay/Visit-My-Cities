import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const ScreenWrapper = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '16'
  }
})