import React, { Component } from 'react';

class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            form: {
                nome: '',
                email: '',
                senha: '',
                sexo: ''
            }
        };
        this.dadosForm = this.dadosForm.bind(this);
    }

    dadosForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }
    
    render(){
        return(
            <div>
                <h2>Login</h2>
                <label for="nome">Nome:</label>
                <input type="text" name="nome" value={this.state.form.nome} onChange={this.dadosForm}/>
                <br/><br/>
                <label for="email">Email:</label>
                <input type="email" name="email" value={this.state.form.email} onChange={this.dadosForm}/>
                <br/><br/>
                <label for="password">Senha:</label>
                <input type="password" name="senha" value={this.state.form.senha} onChange={this.dadosForm} />
                <br/><br/>
                <label for="sexo">Sexo:</label>
                <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
                    <option value="masculino">Masculino</option>
                    <option valie="feminino">Feminino</option>
                </select>
                
                <div>
                    <h4>{this.state.form.nome}</h4>
                    <h4>{this.state.form.email}</h4>
                    <h4>{this.state.form.senha}</h4>
                    <h4>{this.state.form.sexo}</h4>
                </div>
            </div>
        );
    }
}

export default App;