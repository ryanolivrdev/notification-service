import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countNotification = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Você recebeu uma solicitação de amizade'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Você recebeu uma solicitação de amizade'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Você recebeu uma solicitação de amizade'),
        category: 'social',
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
