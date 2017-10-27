import React, { Component } from 'react'

import api  from './Api'

class Cake extends Component {
  constructor(props){
    super(props)

    this.state = {
      cake: [],
      isLoading: false
    }
  }
  componentDidMount(){
    this.setState({ isLoading: true })
    api.loadCakeId(this.props.match.params.cake) 
      .then((res) => {
        this.setState({
          isLoading: false,
          cake: res.data
        })
      })
  }
  render() {
    return (
      <section className="l-conteudo">
        
        <div className="conteudo">
          <div className="conteudo__titulo interna">
            <h2>{this.state.cake.titulo}</h2>
          </div>

          <div className="conteudo__busca">
            <input type="text" className="conteudo__busca--input" />
            <button className="conteudo__busca--botao"><i className="fa fa-search"></i></button>
          </div>
        </div>

        {
          this.state.isLoading &&
          <span>Aguarde, carregando...</span>
        }

        {
          !this.state.isLoading &&
            <div className="interna">
              <div className="interna__box">
                <figure className="interna__box--imagem">
                  <img src={this.state.cake.image} border="0" alt={this.state.cake.titulo}/>
                </figure>

                <div className="interna__box--descricao">
                  <h3>{this.state.cake.titulo}</h3>
                  <p>{this.state.cake.description}</p>
                  <br />
                  <p><strong>Tamanho: </strong> {this.state.cake.sizecake}</p>
                  <ul className="interna__box--descricao_tags">
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">massa</a></li>
                    <li><a href="#">tags</a></li>
                    <li><a href="#">pretium</a></li>
                    <li><a href="#">pellentesque</a></li>

                  </ul>
                </div>
              </div>
            </div> 
        }

        
      </section>
    )
  }
}

export default Cake