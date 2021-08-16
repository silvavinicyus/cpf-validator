import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createValidatorTable1628536897681 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'validator',
        columns: [
          {
            name: 'id',
            type: 'uuid'
          },
          {
            name: 'cpf',
            type: 'varchar'            
          },
          {
            name: 'description',
            type: 'varchar'
          }
        ]
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('validator');
    }
}
