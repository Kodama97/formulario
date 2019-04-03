import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends React.Component {

  state = {
    name: "",
    cpf:"",
    email: "",
    phone:"",
    password:"",
    passwordRepeat: "",
    formValid: false,
  }

  validateForm = event => {
    event.preventDefault();
    console.log("entrou");
    console.log(this.state.password);
    console.log(this.state.passwordRepeat);

    if (this.state.password !== this.state.passwordRepeat) {
      alert("Senhas devem ser iguais!");
      return;
    }

    return true;
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(value);
    console.log(name);

    this.setState({
      [name]:value,
    })

    this.isFormValid();
  }

  isFormValid() {

    if (this.state.name.length  === 0 && this.state.cpf.length === 0) {
      this.setState({formValid: false});
      return;
    }

    if (this.state.email.length === 0) {
      this.setState({formValid: false});
      return;
    }

    if (this.state.password.length === 0 && this.state.passwordRepeat.length === 0) {
      this.setState({formValid: false});
      return;
    }

    this.setState({formValid: true});
  }

  render () {
    return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Formulário</h1>

      <form onSubmit={this.validateForm}> 
        <h2>Nome: *</h2>
        <input type="text" name="name" pattern="[a-z A-Z]+"required onChange={this.handleChange}/>
        <h2>CPF: *</h2>
        <input type="text" name="cpf" pattern="[0-9]{11}" required onChange={this.handleChange}/>
        <h2>E-mail: *</h2>
        <input type="email" name="email" required onChange={this.handleChange}/>
        <h2>Telefone:</h2>
        <input type="tel" name="phone" pattern="[0-9]+" onChange={this.handleChange}/>
        <h2>Senha: *</h2>
        <input type="password" name="password" required onChange={this.handleChange}/>
        <h2>Repetir senha: *</h2>
        <input type="password" name="passwordRepeat" required onChange={this.handleChange}/><br/>
        <button class="btn" disabled={!this.state.formValid} type="submit">Enviar</button>
      </form>
    </Layout>
    )
  }
}

