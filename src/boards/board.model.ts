export interface Board {
  id: string;
  title: string;
  description: string;
  statis: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
