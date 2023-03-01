function user(firstName, lastName, avatar ) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
}

var newUser = new user('hieu', 'duong', 'avatar')

console.log(newUser)