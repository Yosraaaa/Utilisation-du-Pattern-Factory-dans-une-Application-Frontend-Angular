import { NzMessageService } from 'ng-zorro-antd/message';

export abstract class Response {
  abstract show(): void;
}

export abstract class NotificationResponse extends Response {
  constructor(
    protected messageService: NzMessageService,
    protected message: string
  ) {
    super();
  }
}

export class ErrorMessageFeedback extends NotificationResponse {
  show() {
    this.messageService.error(this.message);
  }
}

export class SuccessMessageFeedback extends NotificationResponse {
  show() {
    this.messageService.success(this.message);
  }
}
