import React from "react";
import Logo from "../img/Logo.svg";
import LogoUFG from "../img/LogoUFG.png";
import { Form, Container } from "semantic-ui-react";
import CustomButton from "../components/CustomButton";

const Start = ({ setPage, page }) => (
  <Container>
    <Form>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 50
          }}
        >
          <img src={Logo} width="250" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <CustomButton
            onClick={() => setPage(page + 1)}
            style={{ width: 200, height: 50, fontSize: 17 }}
          >
            <strong>Começar</strong>
          </CustomButton>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center"
            }}
          >
            <a
              href=""
              styles={{
                marginTop: 100
              }}
              onClick={(e) => {
                e.preventDefault();
                setPage(-1)
              }}
            >
              Já sou Cadastrado
            </a>
          </div>

          <div
            style={{
              marginTop: 40,
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
