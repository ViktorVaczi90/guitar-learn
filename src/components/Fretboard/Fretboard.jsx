/* eslint-disable */
import React from 'react';
import Background from './Background';
import { connect } from 'react-redux';
import styled from 'styled-components';

const properties = {
  fretboardHeight: '150px',
};

const FretboardRoot = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const SvgWrapper = styled.div`
  height: 100%;
  margin: 2em;
`;
const FretboardSvg = styled.svg`
  width: 100%;
  height: ${properties.fretboardHeight};
`;

const Fretboard = ({ guitarParameters, defaults }) => (
  <FretboardRoot className="FretboardRoot">
    <SvgWrapper>
      <FretboardSvg>
        <Background guitarParameters={guitarParameters} />
      </FretboardSvg>
    </SvgWrapper>
  </FretboardRoot>
);

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Fretboard);
