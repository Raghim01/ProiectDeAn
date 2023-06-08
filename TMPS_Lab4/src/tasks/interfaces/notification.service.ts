export interface NotificationService {
  sendNotification(
    recipient: string,
    subject: string,
    body: string,
  ): Promise<void>;
}
