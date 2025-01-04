import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import { Task10 } from './src/presentation/screens/tasks/Task10';

import IonIcon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <Task10 />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
