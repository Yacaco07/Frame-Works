import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.databese";

@Injectable()
export class CreatetodoRepository {
    create(data: CreateTodoDto) {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService) {}

    async execute(data: CreateTodoDto) {
        return await this.prisma.todo.create({data});
    }
}