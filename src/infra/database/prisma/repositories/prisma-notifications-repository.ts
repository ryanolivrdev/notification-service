import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notification-repository';

export class PrismaNotificationRepository implements NotificationsRepository {
  async create(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
