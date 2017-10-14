import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import api  from './Api'


class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      cakes: [],
      isLoading: false
    }
  }
  componentDidMount(){
    this.setState({ isLoading: true })
    api.loadHighlights()
      .then((res) => {
        this.setState({
          isLoading: false,
          cakes: res.data.slice(res.data.length - 12).reverse()
        })
      })
  }
  renderCakes(cake){
    return (
      <article className="listagem__box" key={cake._id}>
        <Link to={`/bolo/${cake._id}`}>
          <div className="listagem__box--grade">
            <figure>
              <img src={cake.image} border="0" alt={cake.titulo}/>

              <div className="overlay">
                <p>Visualizar</p>
              </div>
            </figure>

            <div className="listagem__box--grade_titulo">
              <p>{cake.titulo}</p>
            </div>
          </div>
        </Link>
      </article>
    )
  }
  render() {
    return (
      <div>
        <section className="l-conteudo">
            <div className="conteudo">
              <div className="conteudo__titulo interna">
                <h2 id="titulo-bolo">Novidades</h2>
              </div>
        
              <div className="conteudo__busca">
                {/* <input type="text" className="conteudo__busca--input" />
                <button className="conteudo__busca--botao"><i className="fa fa-search"></i></button> */}
              </div>
            </div>
        
            <div className="listagem" id="listagem">
              
              {
                this.state.isLoading &&
                <span>Aguarde, carregando...</span>
              }

              {
                !this.state.isLoading &&
                <div>
                  {this.state.cakes.map((item) => this.renderCakes(item))}
                </div>  
              }
              
            </div>

          </section>
      </div>
    )
  }
}

export default Home