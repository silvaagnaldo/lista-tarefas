import React, { Component } from "react";
import { Fragment } from "react";
import './Tarefas.css'

export default class Tarefas extends Component {

    constructor() {
        super();
        this.state = {
            tarefa: "",
            tarefas: ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"]};

        this.adicionarTarefa = this.adicionarTarefa.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        
        return (
            <Fragment>
                <h1>Tarefas</h1>
                <input onChange={ this.handleChange} value={this.state.tarefa}/>
                <button onClick={this.adicionarTarefa}>Adicionar</button>
                <ul>
                    {this.state.tarefas.map(tarefa => <li>{tarefa}</li>)}
                </ul>
            </Fragment>
        );
    }

    adicionarTarefa() {
        this.setState({
            tarefa:"",
            tarefas: [].concat(this.state.tarefas, this.state.tarefa)});
    }

     handleChange(event) {
        this.setState({ tarefa: event.target.value });
    }
}

   