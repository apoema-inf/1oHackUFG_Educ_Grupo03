import React, { Component } from "react";
import Logo from "../img/Logo.svg";
import LogoUFG from "../img/LogoUFG.png";
import { SingleDatePicker } from "react-dates";
import {
  Input,
  Icon,
  Checkbox,
  Button,
  Form,
  Container
} from "semantic-ui-react";
import "react-dates/lib/css/_datepicker.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      validForm: false
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.email) {
      return this.setState({ error: "email is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px"
              }}
            >
              <img src={Logo} width="250" />
            </div>
            <h2 align="center">Login</h2>

            <h3>E-mail</h3>
            <Input
              type="email"
              data-test="email"
              value={this.state.email}
              name="email"
              fluid
              size="big"
              onChange={this.handleUserChange}
              placeholder="anamariabastos@gmail.com"
            />

            <h3>Senha</h3>
            <Input
              type="password"
              data-test="password"
              value={this.state.password}
              name="password"
              fluid
              size="big"
              onChange={this.handlePassChange}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px"
              }}
            >
              <Button
                type="submit"
                icon
                style={{
                  marginTop: 10,
                  justifyContent: "flex-end",
                  backgroundColor: "#46D3A8",
                  color: "white"
                }}
              >
                Entrar
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    );
  }
}
