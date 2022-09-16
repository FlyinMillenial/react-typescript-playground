// TODOD: The floats stored as strings don't sort properly
const sortObjectArrayByKey = (inputList: Array<any>, keyToSortBy: string, ascending:boolean = true) => {
    const listToSort = [...inputList];
    listToSort.sort((a, b) => {
        if (a[keyToSortBy] < b[keyToSortBy]) {
            return ascending ? -1 : 1;
          }
          if (a[keyToSortBy] > b[keyToSortBy]) {
            return ascending ? 1 : -1;
          }
          return 0;
    })
    return listToSort;
}

const getFlattenedLocation = (location:any) => {
  const { city, state, country, postcode, coordinates, street, timezone } = location;
  const latitude = coordinates.latitude;
  const longitude = coordinates.longitude;
  const streetNumber = street.number;
  const streetName = street.name;
  const timezoneDescription = timezone.description;
  const timezoneOffset = timezone.offset;
  const flattenedLocation = {
    city,
    state,
    country,
    postcode,
    latitude,
    longitude,
    streetNumber,
    streetName,
    timezoneDescription,
    timezoneOffset,
  }
  return flattenedLocation;
}

export { sortObjectArrayByKey, getFlattenedLocation };