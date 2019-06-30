import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import {
  Input,
  Button,
  Icon,
  Checkbox,
  Form,
  Container,
  Transition,
  Progress
} from "semantic-ui-react";
import CustomButton from "../components/CustomButton";
import NextButton from '../components/NextButton'
import "react-dates/lib/css/_datepicker.css";

import Start from "./Start";
import Login from './Login';

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const styles = {
  inputContainer: {
    marginTop: 100
  },
  formItemContainer: {
    marginLeft: 20,
    marginRight: 20
  }
};

export default function Welcome() {
  const updateFormData = e => {
    setField({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  const fieldsInitialState = {
    nome: "",
    apelido: "",
    email: "",
    password: "",
    matricula: "",
    contaMais: undefined,
    dataLimite: "",
    todo1: "",
    todo2: "",
    todo3: "",
    todo4: "",
    todo5: "",
    horasSemanais: undefined,
  };

  const [page, setPage] = useState(0);
  const [fields, setField] = useState(fieldsInitialState);
  const progressPercent = scale(page, 0, 15, 0, 100);
  console.log(fields);

  const {
    nome,
    apelido,
    email,
    password,
    matricula,
    contaMais,
    dataLimite,
    todo1,
    todo2,
    todo3,
    todo4,
    todo5,
    horasSemanais
  } = fields;

  return (
    <Container>
      <Form onSubmit={() => console.log(fields)}>

        {page > 0 && (
          <Icon
            name="arrow left"
            size="large"
            style={{ marginTop: 20 }}
            onClick={() => setPage(page - 1)}
          />
        )}

        {page > 0 && 
          <div style={{marginTop: 25}}>
            <Progress percent={progressPercent} color="black" size="small"/>
          </div>
        }

        <div>{page === 0 && <Start setPage={setPage} page={page} />}</div>

				{	page === -1 && <Login/> }
        <div style={styles.inputContainer}>

          {page === 1 && (
            <div style={styles.formItemContainer}>
              <h3>Qual é o seu nome completo?</h3>
              <Input
                value={nome}
                name="nome"
                fluid
                size="big"
                placeholder="Ana Maria"
                onChange={updateFormData}
              />
              <NextButton setPage={setPage} page={page}/>
            </div>
          )}

          {page === 2 && (
            <div style={styles.formItemContainer}>
              <h3>E ai, como posso te chamar?</h3>
              <Input
                value={apelido}
                name="apelido"
                fluid
                size="big"
                placeholder="Aninha"
                onChange={updateFormData}
              />
              <NextButton setPage={setPage} page={page}/>
            </div>
          )}

          {page === 3 && (
            <div style={styles.formItemContainer}>
              <h3>Seu melhor email?</h3>
              <Input
                value={email}
                name="email"
                fluid
                size="big"
                placeholder="anamariabastos@gmail.com"
                onChange={updateFormData}
              />
              <NextButton setPage={setPage} page={page}/>
            </div>
          )}

          {page === 4 && (
            <div style={styles.formItemContainer}>
              <h3>Senha SUPER secreta</h3>
              <Input
                type="password"
                value={password}
                name="password"
                fluid
                size="big"
                onChange={updateFormData}
              />
              <NextButton setPage={setPage} page={page}/>
            </div>
          )}

          {page === 5 && (
            <div style={styles.formItemContainer}>
              <h3>Qual é o seu número de matrícula?</h3>
              <Input
                type="number"
                placeholder="201502021"
                value={matricula}
                name="matricula"
                fluid
                size="big"
                onChange={updateFormData}
              />
              <NextButton setPage={setPage} page={page}/>
            </div>
          )}

          {page === 6 && (
            <div style={styles.formItemContainer}>
              <h3>Me conta mais</h3>
              <p>
                {apelido
                  ? `${apelido}, você está em que etapa?`
                  : "você está em que etapa?"}
              </p>
              <Form.Field>
                <Checkbox
                  name="contaMais"
                  radio
                  value={0}
                  label="Não comecei as disciplinas de TCC/Pré-Projeto ainda"
                  onChange={updateFormData}
                  checked={contaMais}
                />
              </Form.Field>

              <Form.Field>
                <Checkbox
                  name="contaMais"
                  radio
                  value={1}
                  label="Pré-Projeto"
                  onChange={updateFormData}
                  checked={contaMais}
                />
              </Form.Field>

              <Form.Field>
                <Checkbox
                  name="contaMais"
                  radio
                  value={2}
                  label="TCC1"
                  onChange={updateFormData}
                  checked={contaMais}
                />
              </Form.Field>

              <Form.Field>
                <Checkbox
                  name="contaMais"
                  radio
                  value={3}
                  label="TCC2"
                  onChange={updateFormData}
                  checked={contaMais}
                />
              </Form.Field>
              <NextButton setPage={setPage} page={page}/>
            </div>
          )}

          {page === 7 && (
            <div style={styles.formItemContainer}>
              <h3>Você já tem orientador?</h3>
              <Form.Field>
                <Checkbox
                  name="orientador"
                  radio
                  value={1}
                  label="Sim"
                  onChange={updateFormData}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  name="orientador"
                  radio
                  value={0}
                  label="Não"
                  onChange={updateFormData}
                />
              </Form.Field>

              <h3>Você já tem um tema definido?</h3>
              <Form.Field>
                <Checkbox
                  name="tema"
                  radio
                  value={1}
                  label="Sim"
                  onChange={updateFormData}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  name="tema"
                  radio
                  value={0}
                  label="Não"
                  onChange={updateFormData}
                />
              </Form.Field>
              <NextButton setPage={setPage} page={page}/>
            </div>
          )}

          {page === 8 && (
            <div style={styles.formItemContainer}>
              <h3>Qual sua data limite para finalizar para a banca?</h3>
              <Form.Field>
                <Input
                  type="date"
                  value={dataLimite}
                  name="dataLimite"
                  fluid
                  size="big"
                  onChange={updateFormData}
                />
                {/* <SingleDatePicker
									id="date_input"
									// date={date}
									// focused={focused}
									onDateChange={() => {}}
									onFocusChange={() => {}}
								/> */}
              </Form.Field>
              <NextButton setPage={setPage} page={page}/>
            </div>
          )}

          {page === 9 && (
            <div style={styles.formItemContainer}>
              <h3>Quantas horas semanais você tem disponível?</h3>
              <p>Quanto mais realista melhor hein</p>
              <Input
                type="number"
                value={horasSemanais}
                placeholder="32"
                fluid
                size="big"
                onChange={updateFormData}
                style={{ marginBottom: "10px" }}
              />
              <p>Horas</p>
              <NextButton setPage={setPage} page={page}/>
            </div>
          )}

          {page === 10 && (
            <>
              <h3 style={{ marginBottom: "20px" }}>
                Me conta as primeiras 5 coisas que você precisa fazer
              </h3>
              <Input
                type="text"
                value={todo1}
                name="todo1"
                placeholder="Pesquisar sobre Machado de Assis"
                fluid
                size="big"
                onChange={updateFormData}
                style={{ marginBottom: "10px" }}
              />
              <Input
                type="text"
                value={todo2}
                name="todo2"
                placeholder="Ler o livro Dom Casmurro"
                fluid
                size="big"
                onChange={updateFormData}
                style={{ marginBottom: "10px" }}
              />
              <Input
                type="text"
                value={todo3}
                name="todo3"
                placeholder="Reformular questão problema"
                fluid
                size="big"
                onChange={updateFormData}
                style={{ marginBottom: "10px" }}
              />
              <Input
                type="text"
                value={todo4}
                name="todo4"
                placeholder="Escolher metodologia"
                fluid
                size="big"
                onChange={updateFormData}
                style={{ marginBottom: "10px" }}
              />
              <Input
                type="text"
                value={todo5}
                name="todo5"
                placeholder="Marcar as orientações"
                fluid
                size="big"
                onChange={updateFormData}
                style={{ marginBottom: "10px" }}
              />
              <NextButton setPage={setPage} page={page}/>
            </>
          )}

          {page === 11 && (
            <>
              <h3 style={{ marginBottom: "20px" }}>
                Como quer definir suas metas:
              </h3>

              <Form.Field>
                <Checkbox
                  name="metas"
                  radio
                  value={0}
                  label="Semanais"
                  onChange={updateFormData}
                  checked={contaMais}
                />
              </Form.Field>

              <Form.Field>
                <Checkbox
                  name="metas"
                  radio
                  value={1}
                  label="Quinzenais"
                  onChange={updateFormData}
                  checked={contaMais}
                />
              </Form.Field>
              <NextButton setPage={setPage} page={page}/>
            </>
          )}

          {page === 12 && (
            <>
              <h3 style={{ marginBottom: "20px" }}>
                Como quer que a gente te acompanhe?
              </h3>

              <Form.Field>
                <Checkbox
                  name="Notify"
                  radio
                  value={0}
                  label="Quero vocês super presentes na minha jornada (mais notificações)"
                  onChange={updateFormData}
                  checked={contaMais}
                />
              </Form.Field>

              <Form.Field>
                <Checkbox
                  name="Notify"
                  radio
                  value={1}
                  label="Quem avisa amigo é... (menos notificações)"
                  onChange={updateFormData}
                  checked={contaMais}
                />
              </Form.Field>
              <NextButton setPage={setPage} page={page}/>
            </>
          )}

          {page === 13 && (
            <>
              <h3 style={{ marginBottom: "20px" }}>
                Como quer que a gente te acompanhe?
              </h3>

              <Form.Field>
                <Checkbox
                  name="Notify"
                  radio
                  value={0}
                  label="Quero vocês super presentes na minha jornada (mais notificações)"
                  onChange={updateFormData}
                  checked={contaMais}
                />
              </Form.Field>

              <Form.Field>
                <Checkbox
                  name="Notify"
                  radio
                  value={1}
                  label="Quem avisa amigo é... (menos notificações)"
                  onChange={updateFormData}
                  checked={contaMais}
                />
              </Form.Field>
              <NextButton setPage={setPage} page={page}/>
            </>
          )}
        </div>
      </Form>
    </Container>
  );
}
