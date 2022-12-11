class UserInfo {
  constructor({ nameSelector, profSelector, avatarSelector }) {
    this._elementName = document.querySelector(nameSelector),
      this._elementProf = document.querySelector(profSelector),
      this._elemntImg = document.querySelector(avatarSelector)
  }

  setUserInfo(name, about, avatar) {
    if (name) {
      this._elementName.textContent = name
    }
    if (about) {
      this._elementProf.textContent = about
    }
    if (avatar) {
      this._elemntImg.src = avatar
    }

  }

  getUserInfo() {
    return {
      userName: this._elementName.textContent,
      userDescription: this._elementProf.textContent
    }
  }
}

export { UserInfo }