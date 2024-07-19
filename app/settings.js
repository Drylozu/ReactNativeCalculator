import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function Settings() {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: top,
        backgroundColor: '#303030',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          paddingTop: 4,
          paddingBottom: 14,
          paddingHorizontal: 20,
          gap: 18,
          borderBottomWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.25)',
        }}
      >
        <TouchableOpacity onPress={() => router.dismiss()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 18 }}>Settings</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'green',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'blue',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'yellow',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'purple',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'green',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'blue',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'yellow',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'purple',
          }}
        />
      </ScrollView>
    </View>
  );
}
