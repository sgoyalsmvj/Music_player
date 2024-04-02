import React from 'react';

interface ErrorProps {
   
}

const Error: React.FC<ErrorProps> = () => {
    return (
        <div>
            <h1>Error</h1>
            <p>message</p>
        </div>
    );
};

export default Error;