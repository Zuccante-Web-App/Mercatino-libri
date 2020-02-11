
module.exports.UserManager = class UserManager {
    constructor(db) {
        this.db = db;
    }

    async createUser(newUserInfo) {
        let sql = `INSERT INTO \`Utenti\`(\`nome\`, \`cognome\`, \`password\`, \`email\`, \`id\`) VALUES
            (
                '` + newUserInfo.nome + `',
                '` + newUserInfo.cognome + `',
                '` + newUserInfo.password + `',
                '` + newUserInfo.email + `',
                ` + newUserInfo.id + `
            )
        `
        return this.db.query(sql)
    }

    async getUserInfoByID(userID) {
        let sql = 'SELECT `nome`, `cognome`, `email`, `id` FROM `Utenti` WHERE `id` = ' + userID
        return this.db.query(sql)
    }

    async getUserInfoByEmail(userEmail) {
        let sql = 'SELECT `nome`, `cognome`, `email`, `id` FROM `Utenti` WHERE `email` = ' + userEmail
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