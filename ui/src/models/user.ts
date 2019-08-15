import Role from "./role";

export default class User {
    constructor(
        public userId = 0,
        public username = '',
        public password = '',
        public email = '',
        public firstName = '',
        public lastName = '',
        public phone = '',
        public role = new Role()
    ) {}
}