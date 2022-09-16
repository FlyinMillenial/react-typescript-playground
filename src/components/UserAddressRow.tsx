import React from 'react';
import { location, locationLabelMap } from '../types/location';

interface UserAddressRowProps {
    rowLocation: location;
}

const UserAddressRow = ({rowLocation}:UserAddressRowProps) => {
    return (
        <tr>
            {
                Object.keys(locationLabelMap).map((key, index) => (
                    <td key={index}>{rowLocation[key as keyof location]}</td>
                ))
            }
        </tr>
    );
};

export default UserAddressRow;