import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.databese";


@Injectable()
export class FindAlltodosRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return await this.prisma.todo.FindMany();
    }
}