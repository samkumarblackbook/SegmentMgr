module.exports = (sequelize, DataTypes) => {
    const Segment = sequelize.define('Segment', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        market: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    }, {
        classMethods: {
            associate: (models) => {
                // associations can be defined here
            },
        },
    });
    return Segment;
};