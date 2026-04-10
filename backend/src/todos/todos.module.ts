import { Logger, Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { PrismaService } from 'src/shared/databases/prisma.database';
import {
  CreateTodoRepository,
  DeleteTodoRepository,
  FindAlltodosRepository,
  FindTodoByIdRepository,
  UpdateTodoRepository,
} from './repository';
import { CreateTodoUseCase } from './use-cases/create-todo.use-case';
import { FindAllTodosUseCase } from './use-cases/find-all-todos.use-case';
import { FindTodoByIdUseCase } from './use-cases/find-todo-by-id.use-case';
import { UpdateTodoUseCase } from './use-cases/update-todo.use-case';
import { DeleteTodoUseCase } from './use-cases/delete-todo.use-case';

@Module({
  controllers: [TodosController],
  providers: [
    Logger,
    PrismaService,
    TodosService,
    CreateTodoRepository,
    DeleteTodoRepository,
    FindAlltodosRepository,
    FindTodoByIdRepository,
    UpdateTodoRepository,
    CreateTodoUseCase,
    FindAllTodosUseCase,
    FindTodoByIdUseCase,
    UpdateTodoUseCase,
    DeleteTodoUseCase,
  ],
})
export class TodosModule {}
