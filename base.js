function user(firstName, lastName, avatar ) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
}

user.prototype.className = '1a'

var newUser = new user('hieu', 'duong', 'avatar')

console.log(newUser)
console.log(newUser.className)