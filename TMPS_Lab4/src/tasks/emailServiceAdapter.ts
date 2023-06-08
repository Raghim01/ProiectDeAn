import { Injectable } from '@nestjs/common';
import { EmailService } from './services/email.service';
import { NotificationService } from './interfaces/notification.service';

@Injectable()
export class EmailServiceAdapter implements NotificationService {
  constructor(private readonly emailService: EmailService) {}

  async sendNotification(
    recipient: string,
    subject: string,
    body: string,
  ): Promise<void> {
    await this.emailService.sendEmail(recipient, subject, body);
  }
}
