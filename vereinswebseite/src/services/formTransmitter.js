module.exports = function sendUserForm() {
  const data = {
    gender: this.state.gender,
    title: this.state.title,
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    street: this.state.street,
    houseNumber: this.state.houseNumber,
    postCode: this.state.postCode,
    city: this.state.city,
    birthDate: this.state.birthDate,
    phoneNumber: this.state.phoneNumber,
    email: this.state.email,
    username: this.state.username,
    password: this.state.password,
    accountOwner: this.state.accountOwner,
    bankName: this.state.bankName,
    iban: this.state.iban,
    bic: this.state.bic,
    cityOfRegistration: this.state.cityOfRegistration,
    dateOfRegistration: this.state.dateOfRegistration
  };
  fetch("http://localhost:5000/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(users =>
      this.setState({ users }, () => console.log("data sent...", users))
    )
    .catch(error => {
      alert(error);
    });
};
