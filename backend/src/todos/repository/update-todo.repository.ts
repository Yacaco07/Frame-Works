import { Injectable } from "@nestjs/common";
<<<<<<< HEAD
import { PrismaService } from "src/shared/databases/prisma.databese";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdatetodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update(id: string, data:UpdateTodoDto) {
=======
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.databese";

@Injectable()
export class updatetodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update( data:updatetodoRepository , id:String) {
>>>>>>> a5cd9757ec6007e88daba6c4ab59064037a752ba
        return await this.prisma.todo.update
        ({where: {id}, data});
    }
}