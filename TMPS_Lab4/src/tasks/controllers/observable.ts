import { Task } from 'tasks/entities/task.entity';
import { Observer } from '../interfaces/observer';

export class Observable {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(task: Task): void {
    this.observers.forEach((observer) => {
      observer.update(task);
    });
  }
}
