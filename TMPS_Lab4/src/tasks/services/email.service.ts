import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'rayboww.rn@gmail.com',
        pass: 'razpltdobjoakvvj',
      },
    });
  }

  async sendEmail(
    recipient: string,
    subject: string,
    body: string,
  ): Promise<void> {
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'raghimnaghiev@gmail.com',
      to: recipient,
      subject,
      text: body,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
