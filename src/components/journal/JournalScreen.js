import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';
import { NothingSelected } from './NothingSelected';


export const JournalScreen = () => {
    
    //para extraer del store
    const { active } = useSelector(state => state.notes);
    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate_faster">
            
            <Sidebar />


            <main>
                { (active) 
                    ? (<NoteScreen/>)
                    : ( <NothingSelected/> )

                }
                

            </main>


        </div>
    )
}
