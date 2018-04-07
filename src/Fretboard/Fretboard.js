import React from "react";
export const Fretboard = ({strings, notes, badNotes, goodNotes, }) => (<svg>
  <FretboardBackground/>
  {strings.map(string => <FretboardString string={string}/>)}
  {notes.map(notesOnString => <StringNotes notesOnString={notesOnString}/>)}
</svg>)