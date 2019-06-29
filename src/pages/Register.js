import React, {useState} from 'react';
import { Input, Icon, Checkbox, Button, Form, Container } from 'semantic-ui-react';

const styles = {
	inputContainer: {
		marginTop: 200
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
		contaMais: '',
	}

	const [page, setPage] = useState(1)
	const [fields, setField] = useState(fieldsInitialState)
	console.log(fields)

	const { nome, apelido, email, password, matricula } = fields;

  return (
		<Container>
			<Form onSubmit={() => console.log(fields)}>
				<Icon name="arrow left" size="large" style={{marginTop: 20}} onClick={() => setPage(page-1)}/>
				<div style={styles.inputContainer}>
					{ page === 1 && 
						<>
							<p>Qual é o seu nome completo?</p>
							<Input value={nome} name="nome" fluid size="big" placeholder="Ana Maria" onChange={updateFormData}/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<Button icon style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" style={{ color: "white" }} name="arrow right"/>
								</Button>
							</div>
						</>
					}

					{ page === 2 && 
						<>
							<p>E ai, como posso te chamar?</p>
							<Input value={apelido} name="apelido" fluid size="big" placeholder="Aninha" onChange={updateFormData}/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<Button icon style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "white" }}/>
								</Button>
							</div>
						</>
					}

					{ page === 3 && 
						<>
							<p>Seu melhor email?</p>
							<Input value={email} name="email" fluid size="big" placeholder="anamariabastos@gmail.com" onChange={updateFormData}/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<Button icon style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "white" }}/>
								</Button>
							</div>
						</>
					}

					{ page === 4 && 
						<>
							<p>Senha super secreta</p>
							<Input value={password} name="password" fluid size="big" onChange={updateFormData}/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<Button type="submit" icon style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "white" }}/>
								</Button>
							</div>
						</>
					}

					{ page === 5 && 
						<>
							<p>Qual é o seu número de matrícula?</p>
							<Input type="number" value={matricula} name="matricula" fluid size="big" onChange={updateFormData}/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<Button type="submit" icon style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "white" }}/>
								</Button>
							</div>
						</>
					}

					{ page === 6 && 
						<>
							<p>Conta mais</p>
							<Checkbox
								name="contaMais" 
								radio
								value={0}
								label="Não comecei as disciplinas de TCC/Pré-Projeto ainda"
								onChange={updateFormData}
							/>
							<Checkbox 
								name="contaMais" 
								radio
								value={1}
								label="Pré-Projeto"
								onChange={updateFormData}
							/>
							<Checkbox
								name="contaMais"  
								radio
								value={2}
								label="TCC1"
								onChange={updateFormData}
							/>
							<Checkbox
								name="contaMais"  
								radio
								value={3}
								label="TCC2"
								onChange={updateFormData}
							/>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<Button type="submit" icon style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#46D3A8"}} onClick={() => setPage(page+1)}>
									<Icon size="large" name="arrow right" style={{ color: "white" }}/>
								</Button>
							</div>
						</>
					}
				</div>
			</Form>
		</Container>
  );
}
