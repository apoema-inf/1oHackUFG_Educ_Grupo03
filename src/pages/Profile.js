import React from "react";
import PROFILE from "../img/PROFILE.svg";
import Header from "../components/Header";

import { Container, Image } from "semantic-ui-react";

const pages = () => (
  <Container>
    <div>
      <div style={{ marginBottom: 50 }}>
        <Header icon={PROFILE} text="Ana Maria" backgroundColor="#FFCB58" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div role="list" class="ui list">
          <div role="listitem" class="item" style={{ marginBottom: 30 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div class="ui medium header">Perfil</div>
              <div class="ui small header" style={{ color: "grey" }}>
                Editar
              </div>
            </div>

            <div style={{ color: "grey" }}>
              <div>Matricula:</div>
              <div>Email:</div>
              <div>Curso:</div>
              <div>Orientador:</div>
            </div>
          </div>

          <div role="listitem" class="item" style={{ marginBottom: 30 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div class="ui medium header">Notificações</div>
              <div class="ui small header" style={{ color: "grey" }}>
                Editar
              </div>
            </div>
            <div style={{ color: "grey" }}>
              <div>Receber e-mail:</div>
              <div>Receber SMS:</div>
            </div>
          </div>
          <div role="listitem" class="item">
            <div style={{ color: "grey" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <div class="ui medium header">Ajuda</div>
                <div class="ui small header" style={{ color: "grey" }}>
                  Editar
                </div>
              </div>
              <div>F.A.Q</div>
              <div>Política de Privacidade</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default pages;
