import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Cursos',
  password: '123',
  port: 5432,
});

export default pool;
