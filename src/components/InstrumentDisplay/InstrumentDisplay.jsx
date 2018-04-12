import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'ramda';
import Fretboard from 'components/Fretboard';
import styled from 'styled-components';

const RootDiv = styled.div`
  width: 100%;
`;

const InstrumentDisplay = ({ instrument, defaults }) => (
  <RootDiv>
    {instrument.type === 'guitar' && (
      <Fretboard
        guitarParameters={instrument.guitarParameters}
        defaults={defaults}
      />
    )}
  </RootDiv>
);

export default connect(pick(['instrument', 'defaults']))(InstrumentDisplay);
