// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   ManyToMany,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
//   JoinTable,
// } from 'typeorm';

// import { Game } from './Game';

// @Entity('genres')
// export class Genre {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   name: string;

//   @ManyToMany(() => Game, (game) => game.genres)
//   @JoinTable()
//   games: Game[];

//   @CreateDateColumn()
//   created_at: Date;

//   @UpdateDateColumn()
//   updated_at: Date;
// }
