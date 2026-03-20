import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.databese";

@Injectable()
export class DeletetodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async delete(id:string) {
        return await this.prisma.todo.delete
        ({where: {id}});
    }
}