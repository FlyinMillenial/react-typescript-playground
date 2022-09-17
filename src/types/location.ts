export interface location {
    city: string,
    state: string,
    country: string,
    postcode: number,
    latitude: string,
    longitude: string,
    streetNumber: number,
    streetName: string,
    timezoneDescription: string,
    timezoneOffset: string,
}

export const locationLabelMap: {[key:string]: string} = {
    city: 'City',
    state: 'State',
    country: 'Country',
    postcode: 'Post Code',
    latitude: 'Latitude',
    longitude: 'Longitude',
    streetNumber: 'Street Number',
    streetName: 'Street Name',
    timezoneDescription: 'Timezone',
    timezoneOffset: 'Timezone Offset'
}

export const getFlattenedLocation = (location:any) => {
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