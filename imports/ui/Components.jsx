import React from 'react';
import styled from 'styled-components';

export const DropArea = styled.div`
  color: ${p => (p.highlighted ? 'red' : '#fff')};
  font-weight: bold;
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;

  ${p =>
    !p.filled &&
    `
    &:after {
      content: 'Drag image here';
      border-radius: 6px;
      border: dashed 6px ${p.highlighted ? 'red' : '#fff'};
      padding: 10px;
      height: 300px;
      width: 300px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
  `};
`

export const BanderImage = styled.img`
  background: grey;
  object-fit: cover;
  grid-column: 1 / -1;
  height: 100%;
  max-height: 100%;
  width: 100%;
  transition: all 0.25s ease;
  ${p =>
    p.replacing &&
    `
    filter: blur(10px);
    opacity: .5;
  `};
`

export const Container = styled.div`
  height: 25vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 6fr minmax(80px, 1fr);
  align-items: center;
  justify-items: center;
  background: black;
  padding-left: 50px;

  @media(min-width: 768px) {
    grid-template-rows: 6fr minmax(120px, 1fr);
  }
`

export const Option = styled.label`
  text-transform: uppercase;
  color: #fafafa;
  font-weight: 300;
  position: relative;
  font-size: 1rem;
  opacity: 0.5;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`

export const DropContainer = styled.div`
  height: 100%;
  width: 100%;
  grid-column: 1 / -1;
  position: relative;
`

const App = () => (
  <Container>
    <ImageDrop />
    <input defaultChecked type="radio" name="choice" id="one" />
    <Option suppressContentEditableWarning="true" contentEditable htmlFor="one">
      Click
    </Option>
    <input type="radio" name="choice" id="two" />
    <Option suppressContentEditableWarning="true" contentEditable htmlFor="two">
      To edit
    </Option>
  </Container>
)
