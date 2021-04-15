import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('Zoya_react_ov4', 'Zoya_ov4', 'H587ta', {
    host: '109.206.169.221',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync();
        console.log('Successful connection to the Database');
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
})();