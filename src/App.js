import { Component, useEffect } from "react";
import biscoito from './assets/biscoito.png';
import { Container } from './assets/style';
import itens from './json/db.json';
// https://my-json-server.typicode.com/joaoKnisspell/biscoito-da-sorte-api/frases

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      mensagem: ''
    }

    this.sortear= this.sortear.bind(this);
  }

  sortear(){
    let arrayFrases = itens.frases;
    console.log(arrayFrases)
    let numeroSorteado = Math.floor(Math.random() * arrayFrases.length);
    this.setState({mensagem: arrayFrases[numeroSorteado].frase})
  }

  render(){
    return(
      <Container>
        <h1>Biscoito da Sorte</h1>
        <img src={biscoito} alt="biscoito" />
        <button onClick={this.sortear}>Abrir</button>
        <p>{this.state.mensagem}</p>
        <p className="direitos">Desenvolvido por João Knisspell.</p>
      </Container>
    )
  }
}

export default App;