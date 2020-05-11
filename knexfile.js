// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },
    useNullasDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

};