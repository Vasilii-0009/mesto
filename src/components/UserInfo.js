class UserInfo {
  constructor({ name, prof }) {
    this._elementName = document.querySelector(name),
      this._elementProf = document.querySelector(prof)

  }
  setUserInfo(inputName, inputProf) {
    this._elementName.textContent = inputName
    this._elementProf.textContent = inputProf

  }
  getUserInfo({ nameInput, profInput }) {

    nameInput.value = this._elementName.textContent
    profInput.value = this._elementProf.textContent

  }
}

export { UserInfo }