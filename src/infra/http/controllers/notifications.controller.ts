import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { CancelNotification } from './../../../application/use-cases/cancel-notification';
import { ReadNotification } from './../../../application/use-cases/read-notification';
import { UnreadNotification } from './../../../application/use-cases/unread-notification';
import { CountRecipientNotifications } from './../../../application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from './../../../application/use-cases/get-recipient-notifications';
import { NotificationViewModel } from './../view-models/notification-view-model';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    });
  }

  async counFromRecipiente() {}

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    });
  }

  async unread() {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
