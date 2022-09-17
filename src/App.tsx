import React, { useEffect, useState } from 'react';
import { getRandomUsers } from './api/randomUserClient';
import SortableTable from './components/SortableTable';
import { getFlattenedLocation, locationLabelMap } from './types/location';
import { sortObjectArrayByKey } from './utils/sortObjectArrayByKey';

function App() {

  const [locationList, setLocationList] = useState<Array<any>>([]);

  useEffect(() => {
    getRandomUsers().then(
      (data) => {
        const locationList = data.results.map((result:any) => {
          return getFlattenedLocation(result.location);
        });
        const sortedLocationList = sortObjectArrayByKey(locationList, 'city');
        setLocationList(sortedLocationList);
      })
  }, [])

  const setSortedLocationList = (keyToSortBy:string, ascending: boolean = true) => {
    const sortedLocationList = sortObjectArrayByKey(locationList, keyToSortBy, ascending);
    setLocationList(sortedLocationList);
  }

  return (
    <SortableTable tableData={locationList} rowDataMap={locationLabelMap} sortingCallback={setSortedLocationList}></SortableTable>
  );
}

export default App;
