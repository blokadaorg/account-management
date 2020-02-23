import React from 'react';
import styled from 'styled-components';

const Container = styled.label`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 16px;

    > input {
      dispaly: none;
    }
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0:
    background-color: #ddd;
    transition: 0.4s;
    border-radius: 15px;

    &:before {
      position: absolute;
      content: '';
      height: 15px;
      width: 15px;
      background-color: #999;
      transitionL 0,2;
      border-radius: 50%;
    }
`;

const SliderInput = styled.input`
    &:checked + ${Slider} {
      background-color: #0365b2;
      &:before {
        transform: translateX(15px);
        background-color: white;
      }
    }

`;


export default class ToggleSwitch extends React.Component {
    constructor(props){
        super(props);

        this.state = {


        };
    }

    render(){
        return (
          <Container>
            <SliderInput type="checkbox" />
            <Slider />
          </Container>
        );
    }
}