import { Injectable } from '@nestjs/common';
import { Board } from './boards.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // private: 외부 클래스에서 접근하지 못하게 하는 명령어

  getALlBoards(): Board[] {
    return this.boards;
  }
}
