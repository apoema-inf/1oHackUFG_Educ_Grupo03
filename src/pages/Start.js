import React from "react";
import Logo from "../img/Logo.svg";
import LogoUFG from "../img/LogoUFG.png";
import { Icon, Button, Form, Container } from "semantic-ui-react";

const Start = () => (
  <Container>
    <Form>
      <Icon name="arrow left" style={{ marginTop: 40 }} />

      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img src={Logo} width="250" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            icon
            style={{
              marginTop: 60,
              justifyContent: "flex-end",
              backgroundColor: "#00B37C"
            }}
          >
            Começar!
          </Button>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center"
            }}
          >
            <a
              href="https://www.w3schools.com"
              styles={{
                marginTop: 100
              }}
            >
              Já sou Cadastrado
            </a>
          </div>

          <div
            style={{
              marginTop: 70,
              alignSelf: "center"
            }}
          >
            <img src={LogoUFG} width="150" />
          </div>
        </div>
      </>
    </Form>
  </Container>
);

export default Start;
