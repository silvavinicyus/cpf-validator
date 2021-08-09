export = {
  type: "postgres",
  port: process.env.DOCKER_PORT,
  host: "localhost",
  username: process.env.DOCKER_USERNAME,
  password: process.env.DOCKER_PASSWORD,
  database: process.env.DOCKER_DATABASE,
  entities: [ "./src/modules/**/entities/*.ts" ],
  migrations: ["./src/shared/database/migrations/*ts"],
  cli: {
      migrationsDir: "./src/shared/database/migrations"
  },
  synchronize: false,
}