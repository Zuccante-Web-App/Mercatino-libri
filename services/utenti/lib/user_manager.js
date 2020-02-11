


class UserManager {
    constructor(db) {
        this.db = db;
    }

    async createUser(newUserInfo) {
        let sql = `
            INSERT INTO 'Utenti'('nome', 'cognome', 'user', 'password', 'email', 'id') VALUES
            (
                ` + newUserInfo.nome + `,
                ` + newUserInfo.cognome + `,
                ` + newUserInfo.user + `,
                ` + newUserInfo.password + `,
                ` + newUserInfo.email + `,
                ` + newUserInfo.id + `,
            )
        `
        return this.db.query(sql)
    }

    async getUserInfo(userID) {
        let sql = 'SELECT * FROM `Utenti` WHERE `id` = ' + userID
        return this.db.query(sql)
    }

    async updateUser(userID) {
        // Fare l'update di tutto Forse
        let sql = ''
        return this.db.query(sql)
    }

    async deleteUser(userID) {
        let sql = 'DELETE FROM `Utenti` WHERE `id` = ' + userID
        return this.db.query(sql) 
    }
}

module.exports.UserManager = UserManager