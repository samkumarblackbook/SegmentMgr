module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Segments', {
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
                type: Sequelize.STRING
            },
            market: {
                type: Sequelize.STRING
            },
            active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
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
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Segments');
    }
};