import React, { useState } from 'react';
import { locationLabelMap } from '../types/location';
import UserAddressRow from './UserAddressRow';

interface UserAddressTableProps {
    locations: Array<any>,
    sortingCallback: Function
}

// TODO: Factor out the domain-specific stuff
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

    return (
        <table>
            <thead>
                <tr>
                    {
                        Object.keys(locationLabelMap).map((key, index) => (
                            <th key={`tableHeader-${index}`} onClick={() => {callSortingCallback(key)}}>{locationLabelMap[key]}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.locations.map((location, index) => {
                        return <UserAddressRow rowLocation={location} key={`address${index}`}></UserAddressRow>
                    })
                }
            </tbody>
        </table>
    );
};

export default UserAddressTable;