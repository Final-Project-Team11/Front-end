import React from 'react';

export interface InputStyle {
  [key: string]: {
    width: string;
    height?: string;
    fontSize?: string;
    boxShadow?: string;
    border?: string;
    padding?: string;
    margin?: string;
  };
}

const inputStyle: InputStyle = {
  login: {
    width: '430px',
    height: '50px',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
    fontSize: '15px',
    border: 'none',
    padding: '15px',
  },
  signup: {
    width: '595px',
    height: '50px',
    boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
    fontSize: '15px',
    border: 'none',
    padding: '15px',
    margin: '15px 165px 25px 0',
  },
};

export default test;
