import React, { useState } from 'react';
import UserAddressRow from './UserAddressRow';

interface UserAddressTableProps {
    locations: Array<any>,
    sortingCallback: Function
}

const UserAddressTable = (props:UserAddressTableProps) => {

    const [ascending, setAscending] = useState(false);
    const [currentSortKey, setCurrentSortKey] = useState('city');

    const callSortingCallback = (keyToSortBy:string) => {
        if (keyToSortBy === currentSortKey) {
            setAscending(!ascending);
        } else {
            setAscending(true);
            setCurrentSortKey(keyToSortBy);
        }
        props.sortingCallback(keyToSortBy, ascending);
    }

    // We should make this programatic, and have a table header component that deals with all these concerns
    // Need to create a /types folder and have the interface for location as well as an array of keys for use here
    // and in the discussed custom hook above... address row would use it too.
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => {callSortingCallback('city')}}>City</th>
                    <th onClick={() => {callSortingCallback('latitude')}}>Latitude</th>
                    <th onClick={() => {callSortingCallback('longitude')}}>Longitude</th>
                    <th onClick={() => {callSortingCallback('country')}}>Country</th>
                    <th onClick={() => {callSortingCallback('postcode')}}>Post Code</th>
                    <th onClick={() => {callSortingCallback('state')}}>State</th>
                    <th onClick={() => {callSortingCallback('streetNumber')}}>Street Number</th>
                    <th onClick={() => {callSortingCallback('streetName')}}>Street Name</th>
                    <th onClick={() => {callSortingCallback('timezoneDescription')}}>Timezone description</th>
                    <th onClick={() => {callSortingCallback('timezoneOffset')}}>Timezone offset</th>
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