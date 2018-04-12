export const relativeNotePosition = (noteIndex, ratio = 15) =>
  1 - 1 / Math.pow(2, noteIndex / ratio);

export const a = 5;
