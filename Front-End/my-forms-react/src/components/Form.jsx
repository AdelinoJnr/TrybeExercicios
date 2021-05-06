import React, { Component } from 'react';
import Option from './Option';

class Form extends Component {

  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      resumo: '',
      cidade: '',
      data: 0,
      complemento: false
    }
  }
  
  hendleVlaue = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  hendleSubmit = (event) => {
    event.preventDefault();
    const { nome } = this.state
    alert(`Olá ${nome}, Bem vindo!!`)
  }

  render() {
    const estados =  ["Selecione Seu Estado", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
    
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <form onSubmit={this.hendleSubmit} >
          <div className="mb-3">
            <input onChange={this.hendleVlaue} className="form-control" id="nome" name="nome" type="text" placeholder="Digite Seu Nome Completo" required />
          </div>

          <div className="mb-3">
            <input onChange={this.hendleVlaue} className="form-control" id="email" name="email" type="text" placeholder="Digite Seu E-mail" required />
          </div>

          <div className="mb-3">
            <input onChange={this.hendleVlaue} className="form-control" id="cpf" name="cpf" type="text" placeholder="Digite Seu CPF" required />
          </div>

          <div className="mb-3">
            <input onChange={this.hendleVlaue} className="form-control" id="endereco" name="endereco" type="text" placeholder="Digite Seu Endereço" required />
          </div>

          <div className="mb-3">
            <input onChange={this.hendleVlaue} className="form-control" id="cidade" name="cidade" type="text" placeholder="Digite Sua Cidade" required />
          </div>

          <div className="mb-3">
            <input onChange={this.hendleVlaue} className="form-control" id="data" name="data" type="date" placeholder="Data de Nascimento" required />
          </div>

          <select className="form-select" aria-label="Default select example">
            {estados.map((estado, index) => <Option key={index} estado={estado} />)}
          </select>

          <p>Complemento</p>
          <div className="form-radios">
            <div className="form-check">
              <label className="form-check-label" htmlFor="casa">Casa</label>
              <input className="form-check-input" id="casa" name="complemento" type="radio" />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="apartamento">Apartamento</label>
              <input className="form-check-input" id="apartamento" name="complemento" type="radio" />
            </div>
          </div>

          <div className="form-floating mb-3">
            <textarea onChange={this.hendleVlaue} className="form-control" name="resumo" id="resumo"></textarea>
          </div>

          <div className="mb-3">
            <input onChange={this.hendleVlaue} className="form-control" id="cargo" name="cargo" type="text" placeholder="Descrição do Cargo" required />
          </div>

          <div className="btn-group">
            <button className="btn btn-danger">Apagar</button>
            <button className="btn btn-success" type="submit">Registrar</button>
          </div>
        </form>
      </fieldset>
    );
  }
}

export default Form;