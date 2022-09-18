import { useEffect, useState } from "react";
import { getRandomUsers } from "../api/randomUserClient";
import { getFlattenedLocation, location } from "../types/location";
import { sortObjectArrayByKey } from "./sortObjectArrayByKey";

export const useLocations = (numberOfResults:number):[Array<location>, Function] => {
  const [locationList, setLocationList] = useState<Array<any>>([]);

  // Fetch address data, flatten it, and sort it by city
  useEffect(() => {
    getRandomUsers(numberOfResults).then(
      (data) => {
        const locationList = data.results.map((result:any) => {
          return getFlattenedLocation(result.location);
        });
        // TODO: Convert latitude and longitude to floats so they sort properly
        const sortedLocationList = sortObjectArrayByKey(locationList, 'city');
        setLocationList(sortedLocationList);
      })
  }, [])

  return [locationList, setLocationList]
}