import { NzMessageService } from 'ng-zorro-antd/message';

export abstract class Response {
  abstract show(): void;
}

export class ErrorResponse extends Response {
  constructor(
    protected messageService: NzMessageService,
    protected message: string
  ) {
    super();
  }
  show() {
    this.messageService.error(this.message);
  }
}

export class SuccessResponse extends Response {
  constructor(
    protected messageService: NzMessageService,
    protected message: string
  ) {
    super();
  }
  show() {
    this.messageService.success(this.message);
  }
}
