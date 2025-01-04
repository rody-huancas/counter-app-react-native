import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';

import IonIcon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <FlexDirectionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
