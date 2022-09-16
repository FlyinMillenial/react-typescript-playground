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

export const locationObjectKeys = [    
    'city',
    'state',
    'country',
    'postcode',
    'latitude',
    'longitude',
    'streetNumber',
    'streetName',
    'timezoneDescription',
    'timezoneOffset'
]

export const locationLabelMap = {
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