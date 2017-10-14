import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import api  from './Api'

class Cakes extends Component {
  constructor(props){
    super(props)

    this.state = {
      cakes: [],
      isLoading: false,
      categories: []

    }
  }
  componentDidMount(){
    this.setState({ isLoading: true })
    
    api.loadCategories()
        .then((res) => {
          this.setState({
          categories: res.data
          })
        })

    api.loadHighlights()
      .then((res) => {
        this.setState({
          isLoading: false,
          cakes: res.data
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
    let slugName = this.state.categories.filter((item) => item.slug === this.props.match.params.slug)
    
    if(!slugName.length) return false

    let _cakes = this.state.cakes.filter((cake) => cake.categoria === slugName[0].nome)

    
    return (
      <div>
        <section className="l-conteudo">
            <div className="conteudo">
              <div className="conteudo__titulo interna">
                <h2 id="titulo-bolo">{(_cakes.length) ? `${_cakes[0].categoria}` : 'Ops...'}</h2>
              </div>
        
              {/* <div className="conteudo__busca">
                <input type="text" className="conteudo__busca--input" />
                <button className="conteudo__busca--botao"><i className="fa fa-search"></i></button>
              </div> */}
            </div>
        
            <div className="listagem" id="listagem">
              
              {
                this.state.isLoading &&
                <span>Aguarde, carregando...</span>
              }

              {
                !this.state.isLoading &&
                <div>
                  {
                    (!_cakes.length) ? 
                    <div>
                      <p>Ainda não cadastramos bolos para : '{slugName[0].nome}'</p>
                      <Link to="/">Veja nossas novidades</Link>
                    </div>
                    :
                    _cakes.map((item) => this.renderCakes(item))
                  }
                </div>  
              }
              
            </div>

          </section>
      </div>
    )
  }

}

export default Cakes