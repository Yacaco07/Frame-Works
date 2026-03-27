import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.databese";

@Injectable()
export class CreatetodoRepository {
<<<<<<< HEAD
    delete(arg0: (id: String) => any, String: StringConstructor) {
        throw new Error("Method not implemented.");
    }
=======
>>>>>>> a5cd9757ec6007e88daba6c4ab59064037a752ba
    create(data: CreateTodoDto) {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService) {}

    async execute(data: CreateTodoDto) {
        return await this.prisma.todo.create({data});
    }
}