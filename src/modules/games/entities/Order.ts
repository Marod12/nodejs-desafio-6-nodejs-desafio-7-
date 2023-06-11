// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   ManyToMany,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
//   JoinTable,
// } from 'typeorm';

// import { User } from '../../users/entities/User';
// import { Game } from './Game';

// @Entity('orders')
// export class Order {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @ManyToMany(() => User, (user) => user.orders)
//   @JoinTable()
//   user: User;

//   @ManyToMany(() => Game, (game) => game.id)
//   @JoinTable()
//   games: Game[];

//   @CreateDateColumn()
//   created_at: Date;

//   @UpdateDateColumn()
//   updated_at: Date;
// }
