import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'jsh13579',
  database: 'board_app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'], //데이터베이스 테이블을 생성하는데 사용
  synchronize: true, //애플리케이션을 재시작 시 엔티티안에서 수정된 컬럼의 길이 타입 변경값등을 해당 테이블을 Drop한 후 다시 생성해준다.
};
