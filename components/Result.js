import { useMemo } from 'react';
import { evaluate } from 'mathjs';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';

export function Result({ evaluation }) {
  const preEval = useMemo(() => {
    try {
      return evaluate(evaluation).toString();
    } catch {
      return '';
    }
  }, [evaluation]);

  return (
    <View
      style={{
        height: '35%',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
      }}
    >
      <View style={{ paddingLeft: 4 }}>
        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Ionicons name="settings-sharp" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          borderBottomWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.25)',
          paddingBottom: 4,
        }}
      >
        <Text
          style={{
            fontSize: evaluation.length >= 16 ? 48 : 64,
            color: 'white',
            textAlign: 'right',
          }}
        >
          {evaluation}
        </Text>
        {preEval && evaluation !== '0' && (
          <Text
            style={{
              fontSize: preEval.length >= 16 ? 24 : 32,
              color: 'rgba(255, 255, 255, 0.75)',
              textAlign: 'right',
            }}
          >
            = {preEval}
          </Text>
        )}
      </View>
    </View>
  );
}
