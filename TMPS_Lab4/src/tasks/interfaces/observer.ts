import { Task } from 'tasks/entities/task.entity';

export interface Observer {
  update(task: Task): void;
}
