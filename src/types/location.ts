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