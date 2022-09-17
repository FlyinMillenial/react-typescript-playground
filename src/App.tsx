import SortableTable from './components/SortableTable';
import { locationLabelMap } from './types/location';
import { sortObjectArrayByKey } from './utils/sortObjectArrayByKey';
import { useLocations } from './utils/useLocations';

function App() {
  const [locationList, setLocationList] = useLocations();

  const setSortedLocationList = (keyToSortBy:string, ascending: boolean = true) => {
    const sortedLocationList = sortObjectArrayByKey(locationList, keyToSortBy, ascending);
    setLocationList(sortedLocationList);
  }

  return (
    <SortableTable tableData={locationList} rowDataMap={locationLabelMap} sortingCallback={setSortedLocationList}></SortableTable>
  );
}

export default App;
