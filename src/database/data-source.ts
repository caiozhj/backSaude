// import { createConnection } from "typeorm";

import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'dataProject',
  synchronize: false,
  logging: false,
  migrations: ['./src/database/migrations/*.ts'],
  entities: [
    'src/modules/cars/entities/*.ts',
  ],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
