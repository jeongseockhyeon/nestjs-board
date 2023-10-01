import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; // private: 외부 클래스에서 접근하지 못하게 하는 명령어

  getALlBoards() {
    return this.boards;
  }
}
