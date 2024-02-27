module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      full_name: {
        type: DataTypes.STRING
      },
      phone_no: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      country: {
        type: DataTypes.STRING
      },
      status: { 
        type: DataTypes.BOOLEAN     
        //  ('active', 'inactive', 'deleted'),
          // allowNull:false,
          // defaultValue:'unverified'
},
    },
    {
        timestamps: true,
    });
  
    return User;
  };