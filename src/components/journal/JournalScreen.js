import React from 'react';
import { NoteScreen } from '../notes/NoteScreen';
// import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
                <h1>
                </h1>
                    {/* <NothingSelected /> */}
                    <NoteScreen />
            </main>
        </div>
    );
};
