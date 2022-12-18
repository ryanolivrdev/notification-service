import { NotificationProps } from './../../src/application/entities/notification';
import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';

type Overwrite = Partial<NotificationProps>;

export function makeNotification(overwrite: Overwrite = {}) {
  return new Notification({
    content: new Content('Você recebeu uma solicitação de amizade'),
    category: 'social',
    recipientId: 'recipient-1',
    ...overwrite,
  });
}
