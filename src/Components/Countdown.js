import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: black;
  border-radius: 3px;
  border: none;
  color: white;
  padding:10px;
`
export const Countdown = ({url}) => {
    const onCountdownButton=(e)=>{
        // console.log("button click")
        window.location.reload();
    }
    return (
        <div>
            <Button onClick={onCountdownButton}>
                Countdown image
            </Button>
        </div>
    )
}