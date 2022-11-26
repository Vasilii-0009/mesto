class Api {
  constructor(configApi) {
    this._url = configApi.url
    this._headers = configApi.headers
  }

  _showres(item) {
    return item.then(item => {
      if (item.ok) {

        return item.json()
      }
      return Promise.reject(`${item.status}`)
    })
  }

  getTasks() {
    const card = fetch(`${this._url}/cards`, {
      headers: this._headers,
    })
    return this._showres(card)
  }

  getInfoUser() {
    const infoUSer = fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
    return this._showres(infoUSer)
  }

  saveInfoUser(name, about) {
    const saveInfoUser = fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name, about
      })
    })
    return this._showres(saveInfoUser)
  }

  creatCard(name, link) {
    const creatCard = fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
    return this._showres(creatCard)
  }

  deleteCard(id) {
    const deleteCard = fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    return this._showres(deleteCard)
  }

  addLike(id, elemntLike,) {
    const addLike = fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify({ elemntLike })
    })
    return this._showres(addLike)
  }

  deleteLike(id) {
    const addLike = fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
    return this._showres(addLike)
  }

  updateAvatar(avatar) {
    const updateAvatar = fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
    return this._showres(updateAvatar)
  }


}

export { Api } 