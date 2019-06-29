import React, {useState} from 'react';
import { Input, Icon, Button, Form, Container } from 'semantic-ui-react';

const styles = {

}

export default function Welcome() {
	const [page, setPage] = useState(1)
  return (
		<Container>
			<Form>
				<Icon name="arrow left" style={{marginTop: 10}} onClick={() => setPage(page-1)}/>
				{ page === 1 && 
					<>
						<p>Qual é o seu nome completo?</p>
						<Input fluid size="big" placeholder="Ana Maria"/>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<Button icon style={{marginTop: 10, justifyContent: 'flex-end', backgroundColor: "#00B37C"}} onClick={() => setPage(page+1)}>
								<Icon color="white" style={{ color: "white" }} name="arrow right"/>
							</Button>
						</div>
					</>
				}

				{ page === 2 && 
					<>
						<p>Como prefere ser chamado(a)?</p>
						<Input fluid size="big" placeholder="Aninha"/>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<Button icon style={{marginTop: 10, justifyContent: 'flex-end'}} color="#00B37C" onClick={() => setPage(page+1)}>
								<Icon name="arrow right" style={{ color: "white" }}/>
							</Button>
						</div>
					</>
				}

				{ page === 3 && 
					<>
						<p>Qual é o seu email?</p>
						<Input fluid size="big" placeholder="anamariabastos@gmail.com"/>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<Button icon style={{marginTop: 10, justifyContent: 'flex-end'}} color="#00B37C" onClick={() => setPage(page+1)}>
								<Icon name="arrow right" style={{ color: "white" }}/>
							</Button>
						</div>
					</>
				}

				{ page === 4 && 
					<>
						<p>Escolha uma senha</p>
						<Input fluid size="big"/>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<Button icon style={{marginTop: 10, justifyContent: 'flex-end'}} color="#00B37C" onClick={() => setPage(page+1)}>
								<Icon name="arrow right" style={{ color: "white" }}/>
							</Button>
						</div>
					</>
				}
			</Form>
		</Container>
  );
}
