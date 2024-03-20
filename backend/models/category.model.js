const { sequelizeInstance, sequelieDataTypes: DataTypes } = require("../config/db.config");

exports.CategoryModel = sequelizeInstance.define('Category', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4()
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parent: {
        type: DataTypes.STRING,
        allowNull: false
    },
})