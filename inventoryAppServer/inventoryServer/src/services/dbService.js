const sql = require('mssql/msnodesqlv8');

const config = {
    driver: 'msnodesqlv8',
    connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=localhost;Database=inventory;Trusted_Connection=Yes;',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

let poolPromise = sql.connect(config)
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('Database connection failed: ', err);
    process.exit(1);
  });

const getPool = () => poolPromise;

module.exports = {
  getPool,
  sql
};
