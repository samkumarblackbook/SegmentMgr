module.exports = (sequelize, DataTypes) => {
    const Vehicle = sequelize.define('Vehicle', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        make: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        vin: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return Vehicle;
};