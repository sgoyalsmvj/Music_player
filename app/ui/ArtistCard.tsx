import React from 'react';

interface ArtistCardProps {
    name: string;
    imageUrl: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ name, imageUrl }) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={imageUrl} alt={name} />
        </div>
    );
};

export default ArtistCard;