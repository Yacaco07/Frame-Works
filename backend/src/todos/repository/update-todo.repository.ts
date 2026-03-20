import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.databese";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdatetodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update(id: string, data:UpdateTodoDto) {
        return await this.prisma.todo.update
        ({where: {id}, data});
    }
}