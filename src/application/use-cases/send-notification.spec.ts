import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'Você recebeu uma solicitação de amizade',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
