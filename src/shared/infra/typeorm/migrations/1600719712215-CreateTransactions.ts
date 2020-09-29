import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransactions1600719712215 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'transactions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                      },
                      {
                        name: 'origincurrency',
                        type: 'varchar',
                      },
                      {
                        name: 'sourcevalue',
                        type: 'decimal',
                      },
                      {
                        name: 'destinationcurrency',
                        type: 'varchar',
                      },
                      {
                        name: 'targetvalue',
                        type: 'decimal',
                      },
                      {
                        name: 'conversionrate',
                        type: 'decimal',
                      },
                      {
                        name: 'date',
                        type: 'datetime',
                        default: 'now()',
                      },
                      {
                        name: 'user_id',
                        type: 'uuid',
                      },
                ],
                foreignKeys: [
                    {
                      name: 'TransactionUser',
                      referencedTableName: 'users',
                      referencedColumnNames: ['id'],
                      columnNames: ['user_id'],
                      onDelete: 'CASCADE',
                      onUpdate: 'CASCADE',
                    },
                  ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transactions');
    }

}
