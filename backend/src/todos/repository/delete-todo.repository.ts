import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.databese";

@Injectable()
<<<<<<< HEAD
export class DeletetodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async delete(id:string) {
=======
export class deletetodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async delete(id:String) {
>>>>>>> a5cd9757ec6007e88daba6c4ab59064037a752ba
        return await this.prisma.todo.delete
        ({where: {id}});
    }
}