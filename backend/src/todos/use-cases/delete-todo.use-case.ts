import { Injectable, Logger } from "@nestjs/common";
import {  DeletetodoRepository } from "../repository";
@Injectable()
export class deleteTodoUseCase {
    constructor(
       private readonly deleteTodoRepository: DeletetodoRepository,
       private readonly logger: Logger,
    ) {}


async execute(id:string) {
try{
   this.logger.log('Delete toDo...');
   const todo = this.deleteTodoRepository.delete(id);
   this.logger.log('ToDo created successfully');
   return todo;
}catch (error) {
  this.logger.error(error);
  throw new Error('Failed to create ToDo');
}
}
}

