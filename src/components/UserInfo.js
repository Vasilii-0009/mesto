class UserInfo {
  constructor({ name, prof, avatar }) {
    this._elementName = document.querySelector(name),
      this._elementProf = document.querySelector(prof)
    this._elemntImg = document.querySelector(avatar)
  }

  apiUserInfo(name, about, avatar) {
    this._elementName.textContent = name
    this._elementProf.textContent = about
    this._elemntImg.src = avatar
  }

  setUserInfo(inputName, inputProf,) {
    this._elementName.textContent = inputName
    this._elementProf.textContent = inputProf
  }
  getUserInfo({ nameInput, profInput }) {
    nameInput.value = this._elementName.textContent
    profInput.value = this._elementProf.textContent
  }
}

export { UserInfo }