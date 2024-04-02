import React from 'react';

interface Song {
    key: string;
    title: string;
    artist: string;
    album: string;
}

interface SongCardProps {
    song: Song;
    isPlaying: boolean;
    activeSong: string;
}

const SongCard: React.FC<SongCardProps> = ({ song, isPlaying, activeSong }) => {
    const { title, artist, album } = song;

    return (
        <div>
            <h2>{title}</h2>
            <p>Artist: {artist}</p>
            <p>Album: {album}</p>
        </div>
    );
};

export default SongCard;
