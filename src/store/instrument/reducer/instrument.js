const defaultInstrument = {
  type: 'guitar',
  guitarParameters: {
    strings: ['E2', 'A2', 'D3', 'G3', 'H3', 'E4'],
  },
};

export default (state = defaultInstrument, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
