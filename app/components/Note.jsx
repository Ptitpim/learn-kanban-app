import React from 'react';

const Note = ({task, onDelete}) => {
    return (
        <div>
            <span>{task}</span>
            <button onClick={onDelete}>x</button>
        </div>
    );
};

export default Note;