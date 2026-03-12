import { createTodo } from "../src/js/todo.js";

describe("createTodo", () => {
  it("should return a todo object with the correct properties", () => {
    const data = {
      todoTitle: "Write code",
      completed: true,
      chosenCategory: "Work",
      user: {
        first: "John",
        last: "Doe"
      }
    };

    const todo = createTodo(data);

    expect(todo).toEqual({
      title: "Write code",
      isCompleted: true,
      icon: "✅",
      category: "Work",
      author: {
        firstName: "John",
        lastName: "Doe"
      }
    });
  });

  it("should return correct icon if todo is not completed", () => {
    const data = {
      todoTitle: "Write code",
      completed: false,
      chosenCategory: "Work",
      user: {
        first: "John",
        last: "Doe"
      }
    };

    const todo = createTodo(data);

    expect(todo.icon).toBe("⏳");
  });

  //   it('should return todo with empty user firstName and lastName if no user data provided', () => {
  //     const data = {
  //       todoTitle: 'Write code',
  //       completed: false,
  //       chosenCategory: 'Work'
  //     };

  //     const todo = createTodo(data);

  //     expect(todo.author).toEqual({
  //       firstName: '',
  //       lastName: ''
  //     });
  //   });

  //   it('should return todo with empty user firstName and lastName if only first name provided', () => {
  //     const data = {
  //       todoTitle: 'Write code',
  //       completed: false,
  //       chosenCategory: 'Work',
  //       user: {
  //         first: 'John'
  //       }
  //     };

  //     const todo = createTodo(data);

  //     expect(todo.author).toEqual({
  //       firstName: 'John',
  //       lastName: ''
  //     });
  //   });

  //   it('should return todo with empty user firstName and lastName if only last name provided', () => {
  //     const data = {
  //       todoTitle: 'Write code',
  //       completed: false,
  //       chosenCategory: 'Work',
  //       user: {
  //         last: 'Doe'
  //       }
  //     };

  //     const todo = createTodo(data);

  //     expect(todo.author).toEqual({
  //       firstName: '',
  //       lastName: 'Doe'
  //     });
  //   });
});
