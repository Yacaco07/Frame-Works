import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByIdRepository } from "../repository";

@Injectable()
export class FindTodoByIdUseCase {
    constructor(
       private readonly findTodoByIdRepository: FindTodoByIdRepository,
       private readonly logger: Logger,
    ) {}


async execute(id:string) {
try{
   this.logger.log('Creating toDo...');
   const todo = await this.findTodoByIdRepository.findById(id);
   this.logger.log('ToDo created successfully');
   return todo;
}catch (error) {
  this.logger.error(error);
  throw new Error('Failed to create ToDo');
}  
}    
}