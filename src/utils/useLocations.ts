import { useEffect, useState } from "react";
import { getRandomUsers } from "../api/randomUserClient";
import { getFlattenedLocation } from "../types/location";
import { sortObjectArrayByKey } from "./sortObjectArrayByKey";

export const useLocations = ():[Array<{[key:string]:any}>, Function] => {
  const [locationList, setLocationList] = useState<Array<any>>([]);

  // Fetch address data, flatten it, and sort it by city
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

  return [locationList, setLocationList]
}