require('../lib/dotenv');

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
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
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
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
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
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
    },
    ssl: false,
    seederStorage: 'sequelize'
  }
};
