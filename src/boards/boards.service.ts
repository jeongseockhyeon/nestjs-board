import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // private: 외부 클래스에서 접근하지 못하게 하는 명령어

  //모든 게시물 조회
  getALlBoards(): Board[] {
    return this.boards;
  }
  //게시물 생성
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
  // 특정 게시물 조회
  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`${id} 해당 아이디를 조회할 수 없습니다`);
    }
    return found;
  }

  //특정 게시물 삭제
  deleteBoard(id: string): void {
    //특정 게시물 존재 여부 확인
    const found = this.getBoardById(id);

    this.boards = this.boards.filter((board) => board.id !== id);
  }

  //특정 게시물 상태 업데이트
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
