import { useState } from 'react';
import { evaluate } from 'mathjs';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { ImageBackground, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../components/Button';
import { Result } from '../components/Result';

export default function Calculator() {
  const [evaluation, setEvaluation] = useState('0');
  const { top, bottom } = useSafeAreaInsets();

  const press = (text) => {
    switch (text) {
      case 'CE':
        setEvaluation('0');
        break;
      case 'C':
        setEvaluation(evaluation.slice(0, -1) || '0');
        break;
      case 'EXIT':
        break;
      case '=':
        try {
          const res = evaluate(evaluation).toString();
          setEvaluation(res);
        } catch {
          setEvaluation('Error');
        }
        break;
      case '.':
        if (!evaluation.includes('.')) {
          setEvaluation(evaluation + '.');
        }
        break;
      case '/':
      case '*':
      case '+':
      case '-':
        if (evaluation.slice(-1).match(/[/+*-]/)) {
          setEvaluation(evaluation.slice(0, -1) + text);
        } else {
          setEvaluation(evaluation + text);
        }
        break;
      default:
        if (evaluation === '0') {
          setEvaluation(text);
        } else {
          setEvaluation(evaluation + text);
        }
        break;
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/536/354' }}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingTop: top,
          paddingBottom: bottom,
          backgroundColor: 'rgba(0,0,0,0.6)',
          // backgroundColor: '#303030',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <StatusBar animated style="light" />

        <Result evaluation={evaluation} />

        <View style={{ flex: 1, paddingTop: 8 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {['CE', 'C', 'EXIT', '/'].map((text, i) => (
              <Button
                style={{
                  ...(i === 0 ? { borderLeftWidth: 0 } : {}),
                  ...(i === 3 ? { borderRightWidth: 0 } : {}),
                  borderTopWidth: 0,
                }}
                key={text}
                text={text === 'EXIT' ? '' : text}
                onPress={() => press(text)}
              >
                {text === 'EXIT' && (
                  <MaterialIcons name="exit-to-app" size={28} color="red" />
                )}
              </Button>
            ))}
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {['1', '2', '3', '*'].map((text, i) => (
              <Button
                style={{
                  ...(i === 0 ? { borderLeftWidth: 0 } : {}),
                  ...(i === 3 ? { borderRightWidth: 0 } : {}),
                }}
                key={text}
                text={text}
                onPress={() => press(text)}
              />
            ))}
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {['4', '5', '6', '-'].map((text, i) => (
              <Button
                style={{
                  ...(i === 0 ? { borderLeftWidth: 0 } : {}),
                  ...(i === 3 ? { borderRightWidth: 0 } : {}),
                }}
                key={text}
                text={text}
                onPress={() => press(text)}
              />
            ))}
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {['7', '8', '9', '+'].map((text, i) => (
              <Button
                style={{
                  ...(i === 0 ? { borderLeftWidth: 0 } : {}),
                  ...(i === 3 ? { borderRightWidth: 0 } : {}),
                }}
                key={text}
                text={text}
                onPress={() => press(text)}
              />
            ))}
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {['.', '0', '00', '='].map((text, i) => (
              <Button
                style={{
                  ...(i === 0 ? { borderLeftWidth: 0 } : {}),
                  ...(i === 3 ? { borderRightWidth: 0 } : {}),
                  borderBottomWidth: 0,
                }}
                key={text}
                text={text}
                onPress={() => press(text)}
              />
            ))}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
