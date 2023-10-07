import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { DataSource } from 'typeorm';

export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }
}
