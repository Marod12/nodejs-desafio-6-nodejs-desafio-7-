import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(title: string): Promise<Game[]> {
    return this.repository
      .createQueryBuilder("games")
      .where("games.title ilike :title", { title: `%${title}%` })
      .getMany()
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query(
      "select COUNT(*) from games"
    );
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    return this.repository
      .createQueryBuilder("games")
      .where("games.id = :id", { id: id })
      .relation(Game, "users")
      .of(id)
      .loadMany()
  }
}
