module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name : {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    // one user can many post
    //  user : post
    //   1 -> m
    //   1<-1
    Users.associate = (models) => {
      Users.hasMany(models.Posts, {
        onDelete: "cascade",
      });
    };

   
    // one user can many comment
    //  user : comment
    //   1 -> m
    //   1<-1
    Users.associate = (models)=>{
        Users.hasMany(models.Comments,{
          onDelete:"cascade"
        })
    }

    return Users;
  };





