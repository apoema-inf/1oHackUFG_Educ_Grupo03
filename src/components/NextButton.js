import React from 'react';
import CustomButton from './CustomButton';
import {Icon} from 'semantic-ui-react'

// import { Container } from './styles';

export default function NextButton({setPage, page}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CustomButton
        icon
        round
        basic
        color="green"
        style={{ marginTop: 10, justifyContent: "flex-end" }}
        onClick={() => setPage(page + 1)}
      >
        <Icon
          size="large"
          style={{ color: "black" }}
          name="arrow right"
        />
      </CustomButton>
    </div>
  );
}
