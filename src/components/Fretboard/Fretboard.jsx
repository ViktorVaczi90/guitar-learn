/* eslint-disable */
import React from 'react';

export default ({ strings, notes, badNotes, goodNotes }) => (
  <svg>
    <FretboardBackground />
    {strings.map(string => (
      <FretboardString string={string} onClick={() => {}} />
    ))}
    {notes.map(notesOnString => <StringNotes notesOnString={notesOnString} />)}
  </svg>
);
