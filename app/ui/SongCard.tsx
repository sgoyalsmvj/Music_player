import React from 'react';

interface SongCardProps {
    title: string;
    artist: string;
    album: string;
}

const SongCard: React.FC<SongCardProps> = ({ title, artist, album }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Artist: {artist}</p>
            <p>Album: {album}</p>
        </div>
    );
};

export default SongCard;