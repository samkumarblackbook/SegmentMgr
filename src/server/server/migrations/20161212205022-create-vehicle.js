module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Vehicles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            make: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            model: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            year: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 2017,
            },
            vin: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }),
    down: (queryInterface /*, Sequelize */) =>
        queryInterface.dropTable('Vehicles'),

};