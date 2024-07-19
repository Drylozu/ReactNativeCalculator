import { TouchableOpacity, Text } from 'react-native';

export function Button({ text, children, onPress, style }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        borderWidth: 0.5,
        ...style,
      }}
      onPress={onPress}
    >
      {text ? (
        <Text style={{ color: 'white', fontSize: 32 }}>{text}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
