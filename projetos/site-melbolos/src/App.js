import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.png'
import api  from './Api'
import Home from './Home'
import Cake from './Cake'
import Cakes from './Cakes'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      categories: [],
      isLoading: false
    }
  }
  componentDidMount(){
    this.setState({ isLoading: true })
    api.loadCategories()
      .then((res) => {
        this.setState({
          isLoading: false,
          categories: res.data
        })
      })
  }
  renderCategorie(categorie){
    return (<li key={categorie._id}><Link to={`/categoria/${categorie.slug}`} >{categorie.nome}</Link></li>)
  }
  render() {
    return (
      <Router>
        <main className="l-container">

          <aside className="lateral">
            <div className="lateral__logo">
              <h1><Link to="/"><img src={logo} border="0" alt="Mel Bolos Fake Locação" title="Mel Bolos Fake Locação" /></Link></h1>
            </div>
        
            <nav className="lateral__menu hide">

              <ul className="lateral__menu--links" id="menu-links">
                {
                  this.state.isLoading &&
                  <span>Aguarde, carregando...</span>
                }

                {
                  !this.state.isLoading &&
                  <div>
                    {this.state.categories.map((categorie) => this.renderCategorie(categorie))}
                  </div>  
                }
              </ul>
        
              <ul className="lateral__menu--sociais">
                <li><a href=""><i className="fa fa-facebook"></i></a></li>
                <li><a href=""><i className="fa fa-twitter"></i></a></li>
              </ul>
            </nav>
          </aside>
      
          <Route exact path='/' component={Home} />
          <Route exact path='/bolo/:cake' component={Cake} />
          <Route exact path='/categoria/:slug' component={Cakes} />

      </main>
    </Router>
    )
  }
}

export default App
