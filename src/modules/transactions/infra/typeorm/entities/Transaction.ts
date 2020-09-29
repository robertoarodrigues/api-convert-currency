import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import User from '../../../../users/infra/typeorm/entities/User';

@Entity('transactions')
class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    origincurrency: string;

    @Column()
    sourcevalue: number;

    @Column()
    destinationcurrency: string;

    @Column()
    targetvalue: number;

    @Column()
    conversionrate: number;

    @CreateDateColumn()
    date: Date;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
}

export default Transaction;

