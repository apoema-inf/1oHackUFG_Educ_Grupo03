import React from 'react';
import { Button } from "semantic-ui-react";

export default function CustomButton(props) {
  const styles = {
    marginTop: 20,
    justifyContent: "flex-end",
    backgroundColor: "#00B37C",
    borderRadius: 0,
    border: "2px solid",
  }

  const roundStyle = props.round ? {
    marginTop:30,
    width:60,
    height:60,
  } : {}

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button
        {...props} 
        icon
        basic 
        color="black"
        style={{
          ...styles,
          ...props.style,
          borderRadius: props.round ? '46%' : 0,
          ...roundStyle
        }}
      >
        {props.children}
      </Button>
    </div>
  );
}
