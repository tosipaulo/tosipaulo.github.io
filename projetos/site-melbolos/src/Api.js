import axios from 'axios'

const api = axios.create({
  baseURL: 'http://melbolos.herokuapp.com/api/'
})

const apis = {
  loadCategories: () => api.get('categorias'),
  loadHighlights: () => api.get('cakes'),
  loadCakeId: (_id) => api.get(`1/cakes/${_id}`),
  loadCakeCategories: (categorie) => api.get(`cakes/${categorie}`)
}

export default apis