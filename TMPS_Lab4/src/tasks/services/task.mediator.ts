import { Injectable } from '@nestjs/common';
import { EmailService } from './email.service';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'tasks/dto/create-task.dto';
import { User } from 'auth/entities/user.entity';
import { Task } from 'tasks/entities/task.entity';
import { TaskStatus } from 'tasks/task-status.enum';

@Injectable()
export class TaskMediator {
  private emailService: EmailService;
  private tasksService: TasksService;

  constructor(emailService: EmailService, tasksService: TasksService) {
    this.emailService = emailService;
    this.tasksService = tasksService;
  }

  async createTaskWithNotification(
    createTaskDto: CreateTaskDto,
    user: User,
  ): Promise<Task> {
    const task = await this.tasksService.createTask(createTaskDto, user);
    const emailSubject = 'New Task Created';
    const emailBody = `A new task with title "${task.title}" has been created.`;
    await this.emailService.sendEmail(user.username, emailSubject, emailBody);
    return task;
  }

  async updateTaskStatusWithNotification(
    id: string,
    user: User,
    status: TaskStatus,
  ): Promise<Task> {
    const task = await this.tasksService.updateTaskStatus(id, user, status);
    const emailSubject = 'Task Status Updated';
    const emailBody = `The status of task with title "${task.title}" has been updated to "${status}".`;
    await this.emailService.sendEmail(user.username, emailSubject, emailBody);
    return task;
  }
}
