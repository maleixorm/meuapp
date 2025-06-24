import React, { Component } from 'react';

class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            email: '',
            senha: '',
            sexo: ''
        };
        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSenha = this.trocaSenha.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);
    }

    trocaEmail(e){
        let valorDigitado = e.target.value;
        this.setState({email: valorDigitado});
    }

    trocaSenha(e){
        let valorDigitado = e.target.value;
        this.setState({senha: valorDigitado});
    }

    trocaSexo(e){
        let valorDigitado = e.target.value;
        this.setState({sexo: valorDigitado});
    }
    
    render(){
        return(
            <div>
                <h2>Login</h2>
                <label for="email">Email:</label>
                <input type='email' name='email' value={this.state.email} onChange={this.trocaEmail}/>
                <br/><br/>
                <label for='password'>Senha:</label>
                <input type='password' name='senha' value={this.state.senha} onChange={this.trocaSenha} />
                <br/><br/>
                <label for='sexo'>Sexo:</label>
                <select name='sexo' value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value='masculino'>Masculino</option>
                    <option valie='feminino'>Feminino</option>
                </select>
                
                <div>
                    <h4>{this.state.email}</h4>
                    <h4>{this.state.senha}</h4>
                    <h4>{this.state.sexo}</h4>
                </div>
            </div>
        );
    }
}

export default App;