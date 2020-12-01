require('../lib/dotenv');

function logger (queryString, queryObject) {
  if (queryObject.bind) {
    queryObject.bind.forEach((element, index) => {
      if (typeof element === 'string' || (element !== null && typeof element === 'object')) {
        element = `'${element}'`;
      }

      queryString = queryString.replace(`$${index + 1}`, ` ${element}`);
    });
  }
  console.log(queryString);
}

module.exports = {
  dev: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      },
      useUTC: false
    },
    ssl: true,
    timezone: process.env.TIMEZONE,
    define: {
      timestamp: true,
      underscored: true,
      paranoid: true,
    },
    seederStorage: 'sequelize'
  },
  prod: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    logging: process.env.VERBOSE ? logger : false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      },
      useUTC: false
    },
    ssl: true,
    timezone: process.env.TIMEZONE,
    define: {
      timestamp: true,
      underscored: true,
      paranoid: true,
    },
    seederStorage: 'sequelize'
  },
  local: {
    logging: logger,
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    timezone: process.env.TIMEZONE,
    dialectOptions: {
      useUTC: false
    },
    define: {
      timestamp: true,
      underscored: true,
      paranoid: false,
    },
    ssl: false,
    seederStorage: 'sequelize'
  }
};
