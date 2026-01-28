import { View } from "react-native";

export const ContentContainer = ({ children }) => (
   <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
      {children}
   </View>
);