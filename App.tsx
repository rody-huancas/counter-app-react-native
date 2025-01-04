import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import { PositionScreen } from './src/presentation/screens/PositionScreen';

import IonIcon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <PositionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
