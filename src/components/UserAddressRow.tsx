import React from 'react';
import { location, locationLabelMap } from '../types/location';

interface UserAddressRowProps {
    rowLocation: location;
}

// TODO: Factor out the location and locationlabel map
// Then your unit test is just that it renders the number of TDs that are keys in the object
// and that the data in the object ends up in the right cell.

// As it is, the test will contain location data, as does the row, as does the table itself...
// if location data changes we need to change a BUNCH of stuff.  Instead we should strive for a
// generalized solution that our use case fits in to.
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