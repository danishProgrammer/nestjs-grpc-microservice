import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';
import { GrpcMethod } from '@nestjs/microservices';
import { PostTodoDTO, Todo, Todos, TodoServiceController } from 'proto/todo';
import { Observable } from 'rxjs';

@Controller()
export class TodoController implements TodoServiceController {
  constructor(private readonly todoService: TodoService) {}

  @GrpcMethod('TodoService','GetTodos')
  getTodos(): Promise<Todos> | Observable<Todos> | Todos {
    return this.todoService.getTodos();
  }


  @GrpcMethod('TodoService','PostTodo')
  postTodo(postTodoDTO:PostTodoDTO) : Todo{
    return this.todoService.postTodo(postTodoDTO);
  }
}
