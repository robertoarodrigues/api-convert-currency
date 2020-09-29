import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1600710627827 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                      name: 'id',
                      type: 'uuid',
                      isPrimary: true,
                      generationStrategy: 'uuid',
                      default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                      }
                    ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
