# Dependency Injection

## Description

When class A used some functionality of class B, then it is said that class A has a dependency of class B.

To use class B we need to create its object first:
const b = new B()

But what if B also depends on class C, then we need another object and so on.

So, transferring the task of creating the object to someone else and directly using the dependency is called dependency injection.

According to the principles, a Class should concentrate on fulfilling its responsibilities and not on creating objects that it requires.

And that's where dependency injection comes into play: it provides the class with the required objects.

### Benefits of using Dependency Injection

- Helps in Unit testing
- Boiler plate code is reduced, as initializing of dependencies is done by the injector component.
- Extending the application becomes easier.
- Helps to enable loose coupling, which is important in application programming.