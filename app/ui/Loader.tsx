import React from 'react';

interface LoaderProps {
    title:string
    // Define any props you need for the Loader component
}

const Loader: React.FC<LoaderProps> = ({title}) => {
    return (
        <div>
            {/* Add your loader content here */}
        </div>
    );
};

export default Loader;