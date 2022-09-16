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