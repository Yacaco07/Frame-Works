import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.databese";

@Injectable()
export class FindTodoByIdRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findById(id: string) {
        return await this.prisma.todo.FindUnique({where: {id: id}});
    }
}