import { Injectable, Logger } from "@nestjs/common";
import { UpdatetodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class updateTodoUseCase {
    constructor(
       private readonly updateTodoRepository: UpdatetodoRepository,
       private readonly logger: Logger,
    ) {}


async execute(id:string ,data: UpdateTodoDto) {
try{
   this.logger.log('Creating toDo...');
   const todo = await this.updateTodoRepository.update(id, data);
   this.logger.log('ToDo created successfully');
   return todo;
}catch (error) {
  this.logger.error(error);
  throw new Error('Failed to create ToDo');
}  
}    
} 