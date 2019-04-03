import React, { Component } from 'react';
import '../../assets/App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {repositorios: [], user :""}
    this.buscaUsuario = this.buscaUsuario.bind(this);
    this.atualizacaoEstado = this.atualizacaoEstado.bind(this);
  }

  buscaUsuario(event) {
    event.preventDefault();
    fetch('https://api.github.com/users/' + this.state.nome + '/repos?sort=created&per_page=10',{
      headers : {
        Authorization : "Basic c2F1bG8ubWFjZWRvcHJvamV0b3NAZ21haWwuY29tOlNhdWxvbWFjZWRvMTI="
      }
    })

    .then(resposta => console.log(resposta))
    .then(this.mostrarRepositorios())
    .catch(erro => console.log(erro));
  };

  mostrarRepositorios() {
    fetch("https://api.github.com/"+this.state.user+"/repos")
    .then(resposta => resposta.json())
    .then(data => this.setState({repositorios : data}))
    .catch(erro => console.log(erro));

  }

  atualizacaoEstado(event) {
    this.setState({user : event.target.value});
  };

  render() {
    return (
      <div className="App">

        <div id="pesquisa">  

          <form id="formulario" method="POST" onSubmit={this.buscaUsuario}>
              <h1 id="titulo">Busca de usuário no GitHub</h1>
              <span id="orientacao">Nome de usuário</span>
              <input placeholder="Nome usuário" id="input" type="text" value={this.state.user} onChange={this.atualizacaoEstado}/>
              <button id  ="pesquisa-button" type="submit">Pesquisar</button>
          </form>

        </div>

        <div id="repositorios">
          <table>

            <thead>
              <tr id="repositorio-table">
                <th id="table-column">ID</th>
                <th id="table-column">Nome</th>
                <th id="table-column">Descrição</th>
                <th id="table-column">Data de criação</th>
                <th id="table-column">Tamanho</th>
              </tr>
            </thead>

            <tbody>
            {
              this.state.repositorios.map(function(repo) {
                return (
                    <tr key = {repo.id} id="repositorio-container">
                        <td id="conteudo">{repo.id}</td>
                        <td id="conteudo">{repo.name}</td>
                        <td id="conteudo">{repo.description}</td>
                        <td id="conteudo">{repo.created_at}</td>
                        <td id="conteudo">{repo.size}</td>
                    </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default App;
