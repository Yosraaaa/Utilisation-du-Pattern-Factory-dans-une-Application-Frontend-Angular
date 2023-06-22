import { HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  Response,
  ErrorResponse,
  SuccessResponse,
} from './response';

export abstract class ResponseFactory {
  showResponse = (response: HttpResponseBase) => {
    const feedback = this.createResponse(response);
    feedback.show();
  };

  abstract createResponse<T extends any>(response: HttpResponseBase): Response;
}

@Injectable()
export class NotificationResponseFactory extends ResponseFactory {
  constructor(private messageService: NzMessageService) {
    super();
  }

  createResponse<T extends any>(response: HttpResponseBase): Response {
    return response instanceof HttpErrorResponse
      ? new ErrorResponse(
          this.messageService,
          response.error.description
        )
      : new SuccessResponse(
          this.messageService,
          'Request is successful'
        );
  }
}
