import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const tileStyle = {
  padding: 16,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  borderBottomWidth: 1,
};

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
          alignItems: 'center',
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
        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
          Settings
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
        <View style={tileStyle}>
          <View style={{ gap: 4 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Selected Theme</Text>
            <Text style={{ color: '#ccc', fontSize: 14 }}>
              Theme by Drylozu
            </Text>
          </View>

          <Text style={{ color: 'white', fontSize: 16 }}>
            Dark (pre-installed)
          </Text>
        </View>

        <View style={tileStyle}>
          <View style={{ gap: 4 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>
              Load a new theme
            </Text>
            <Text style={{ color: '#ccc', fontSize: 14 }}>
              Open the file picker and select a YAML (.yaml, .yml) file
            </Text>
          </View>
        </View>

        <View style={tileStyle}>
          <View style={{ gap: 4 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Remove theme</Text>
            <Text style={{ color: '#ccc', fontSize: 14 }}>
              Removes the current theme
            </Text>
          </View>
        </View>

        <View style={tileStyle}>
          <View style={{ gap: 4 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>
              Made by Drylozu
            </Text>
            <Text style={{ color: '#ccc', fontSize: 14 }}>
              Deivid's Calculator - v1.0.0
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
