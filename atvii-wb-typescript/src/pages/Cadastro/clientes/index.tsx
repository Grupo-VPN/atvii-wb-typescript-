/* eslint-disable react/jsx-pascal-case */
import * as React from 'react';
import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'
import './styles.css'

function CadastrarClientes() {
    return (
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Cadastrar Cliente</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Nome">Nome:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Telefone">Telefone:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Email">Email:</label>
                            <input type="email"/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit'>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarClientes;