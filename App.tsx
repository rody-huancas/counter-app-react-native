import {SafeAreaView} from 'react-native';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen name='Rody Huancas Chuquipoma' /> */}
      <CounterScreen />
    </SafeAreaView>
  );
};

export default App;
