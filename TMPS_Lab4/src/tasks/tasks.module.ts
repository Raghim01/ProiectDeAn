import { Module } from '@nestjs/common';
import { TasksController } from './controllers/tasks.controller';
import { TasksService } from './services/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { AuthModule } from 'auth/auth.module';
import { EmailServiceAdapter } from './emailServiceAdapter';
import { EmailService } from './services/email.service';
import { Observable } from './controllers/observable';
import { TaskMediator } from './services/task.mediator';
import { NotificationService } from './interfaces/notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), AuthModule],
  controllers: [TasksController],
  providers: [
    TasksService,
    EmailServiceAdapter,
    EmailService,
    Observable,
    TaskMediator,
  ],
})
export class TasksModule {}
