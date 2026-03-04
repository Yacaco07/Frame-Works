

export class CreateTodoDto {
title : String; 
description: String;
completed: Boolean;
priority: TodoPriority;  
dueAt:  Date;
completedAt: Date;
userId: String;
createdAt: Date;
updatedAt: Date;
}

enum TodoPriority{
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',

}