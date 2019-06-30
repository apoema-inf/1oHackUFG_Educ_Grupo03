import React, {useState} from 'react';
import {SingleDatePicker} from 'react-dates';
import { Input, Button, Icon, Checkbox, Form, Container } from 'semantic-ui-react';
import CustomButton from '../components/CustomButton';
import 'react-dates/lib/css/_datepicker.css';

import Start from './Start';

const styles = {
	inputContainer: {
		marginTop: 100
	}
}

export default function Welcome() {
	const updateFormData = (e) => {
		setField({
			...fields,
			[e.target.name]: e.target.value,
		});
	};

	const fieldsInitialState = {
		nome: '',
		apelido: '',
		email: '',
		password: '',
		matricula: '',
		contaMais: undefined,
	}

	const [page, setPage] = useState(0)
	const [fields, setField] = useState(fieldsInitialState)
	console.log(fields)

	const { nome, apelido, email, password, matricula, contaMais } = fields;

  return (
		<Container>
			<Form onSubmit={() => console.log(fields)}>
				{ page > 0 &&
					<Icon name="arrow left" size="large" style={{marginTop: 20}} onClick={() => setPage(page-1)}/>
				}
				<div>
					{ page === 0 &&
						<Start setPage={setPage} page={page}/>
					}
				</div>

				<div style={styles.inputContainer}>

					{ page === 1 && 
						<>
							<h3>Qual é o seu nome completo?</h3>
							<Input value={nome} name="nome" fluid size="big" placeholder="Ana Maria" onChange={updateFormData}/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<CustomButton icon round basic color="green" style={{marginTop: 10, justifyContent: 'flex-end'}} onClick={() => setPage(page+1)}>
									<Icon size="large" style={{ color: "black" }} name="arrow right"/>
								</CustomButton>
							</div>
						</>
					}

					{ page === 2 && 
						<>
							<h3>E ai, como posso te chamar?</h3>
							<Input value={apelido} name="apelido" fluid size="big" placeholder="Aninha" onChange={updateFormData}/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<CustomButton icon round basic style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "black" }}/>
								</CustomButton>
							</div>
						</>
					}

					{ page === 3 && 
						<>
							<h3>Seu melhor email?</h3>
							<Input value={email} name="email" fluid size="big" placeholder="anamariabastos@gmail.com" onChange={updateFormData}/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<CustomButton icon round style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "black" }}/>
								</CustomButton>
							</div>
						</>
					}

					{ page === 4 && 
						<>
							<h3>Senha SUPER secreta</h3>
							<Input type="password" value={password} name="password" fluid size="big" onChange={updateFormData}/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<CustomButton type="submit" round icon style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "black" }}/>
								</CustomButton>
							</div>
						</>
					}

					{ page === 5 && 
						<>
							<h3>Qual é o seu número de matrícula?</h3>
							<Input type="number" value={matricula} name="matricula" fluid size="big" onChange={updateFormData}/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<CustomButton type="submit" round icon style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "black" }}/>
								</CustomButton>
							</div>
						</>
					}

					{ page === 6 && 
						<>
							<h3>Conta mais</h3>
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
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<CustomButton type="submit" round icon style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "black" }}/>
								</CustomButton>
							</div>
						</>
					}

					{ page === 7 && 
						<>
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
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<CustomButton type="submit" icon round style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "black" }}/>
								</CustomButton>
							</div>
						</>
					}

					{ page === 8 && 
						<>
							<h3>Qual sua data limite para finalizar para a banca?</h3>
							<Form.Field>
								{/* <SingleDatePicker
									id="date_input"
									// date={date}
									// focused={focused}
									onDateChange={() => {}}
									onFocusChange={() => {}}
								/> */}
							</Form.Field>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<CustomButton type="submit" icon round style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "black" }}/>
								</CustomButton>
							</div>
						</>
					}

					{ page === 9 && 
						<>
							<h3>Dentro do modelo, o que você já concluiu?</h3>
							<p>Ei, relaxa se não tiver feito nada ainda, vamos conseguir!</p>
							
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<CustomButton type="submit" icon round style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "black" }}/>
								</CustomButton>
							</div>
						</>
					}

					{ page === 10 && 
						<>
							<h3>Quantas horas semanais você tem disponível?</h3>
							<p>Quanto mais realista melhor hein</p>

							<div style={{display: 'flex', flexDirection: 'column'}}>
								<CustomButton type="submit" icon round style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "black" }}/>
								</CustomButton>
							</div>
						</>
					}

				</div>
			</Form>
		</Container>
  );
}
