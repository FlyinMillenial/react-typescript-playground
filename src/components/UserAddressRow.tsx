import React from 'react';

interface UserAddressRowProps {
    location: any;
}

const UserAddressRow = (props:UserAddressRowProps) => {
    return (
        <tr>
            <td>{props.location.city}</td>
            <td>{props.location.latitude}</td>
            <td>{props.location.longitude}</td>
            <td>{props.location.country}</td>
            <td>{props.location.postcode}</td>
            <td>{props.location.state}</td>
            <td>{props.location.streetNumber}</td>
            <td>{props.location.streetName}</td>
            <td>{props.location.timezoneDescription}</td>
            <td>{props.location.timezoneOffset}</td>
        </tr>
    );
};

export default UserAddressRow;