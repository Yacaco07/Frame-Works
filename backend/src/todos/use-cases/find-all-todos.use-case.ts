import { Injectable, Logger } from "@nestjs/common";
import {  FindAlltodosRepository } from "../repository";

@Injectable()
export class FindAllUseCase{
    constructor(
       private readonly findallTodoRepository: FindAlltodosRepository,
       private readonly logger: Logger,
    ) {}


async execute() {
try{
   this.logger.log('Creating toDo...');
   const todo = await this.findallTodoRepository.findAll();
   this.logger.log('ToDo created successfully');
   return todo;
}catch (error) {
  this.logger.error(error);
  throw new Error('Failed to create ToDo');
}  
}    
}