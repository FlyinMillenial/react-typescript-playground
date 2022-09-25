import React, { useEffect, useState } from 'react';

interface PictureSwapProps {
    pictureUrls: [string, string]
}

const PictureSwap = ({pictureUrls}:PictureSwapProps) => {
    const [imageSource, setImageSource] = useState(pictureUrls[0]);

    // UseEffect will update the picture immediately if the pictureUrls prop changes,
    // otherwise the old URL would be persisted by useState
    useEffect(() => {
        setImageSource(pictureUrls[0])
    }, [pictureUrls])

    const handleMouseOver = () => setImageSource(pictureUrls[1]);
    const handleMouseOut = () => setImageSource(pictureUrls[0]);

    return (
        <img src={imageSource} onMouseOver={ () => handleMouseOver() } onMouseOut={ () => handleMouseOut() } />
    );
};

export default PictureSwap;