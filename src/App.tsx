import ContextSetter from './components/ContextSetter';
import ContextViewer from './components/ContextViewer';
import LocationTable from './components/LocationTable';
import PokemonViewer from './components/PokemonViewer';
import { PokemonContextProvider } from './utils/PokemonContext';


function App() {

  return (
    <PokemonContextProvider>
        <LocationTable />
        <PokemonViewer />
        <ContextViewer />
        <ContextSetter />
    </PokemonContextProvider>
  );
}

export default App;
