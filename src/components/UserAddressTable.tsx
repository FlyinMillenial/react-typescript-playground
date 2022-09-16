import React, { useState } from 'react';
import UserAddressRow from './UserAddressRow';

interface UserAddressTableProps {
    locations: Array<any>,
    sortingCallback: Function
}

const UserAddressTable = (props:UserAddressTableProps) => {

    // Could we define a custom hook that takes in either an interface or a null object or array of keys
    // and defines the state for these ascending booleans?
    const [cityAscending, setCityAscending] = useState(false);

    const callSortingCallback = (keyToSortBy:string, ascendingState:boolean, ascendingSetter: Function) => {
        props.sortingCallback(keyToSortBy, ascendingState);
        ascendingSetter(!ascendingState);
    }

    // We should make this programatic, and have a table header component that deals with all these concerns
    // Need to create a /types folder and have the interface for location as well as an array of keys for use here
    // and in the discussed custom hook above... address row would use it too.
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => {callSortingCallback('city', cityAscending, setCityAscending)}}>City</th>
                    <th onClick={() => {props.sortingCallback('latitude')}}>Latitude</th>
                    <th onClick={() => {props.sortingCallback('longitude')}}>Longitude</th>
                    <th onClick={() => {props.sortingCallback('country')}}>Country</th>
                    <th onClick={() => {props.sortingCallback('postcode')}}>Post Code</th>
                    <th onClick={() => {props.sortingCallback('state')}}>State</th>
                    <th onClick={() => {props.sortingCallback('streetNumber')}}>Street Number</th>
                    <th onClick={() => {props.sortingCallback('streetName')}}>Street Name</th>
                    <th onClick={() => {props.sortingCallback('timezoneDescription')}}>Timezone description</th>
                    <th onClick={() => {props.sortingCallback('timezoneOffset')}}>Timezone offset</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.locations.map((location, index) => {
                        return <UserAddressRow location={location} key={`address${index}`}></UserAddressRow>
                    })
                }
            </tbody>
        </table>
    );
};

export default UserAddressTable;