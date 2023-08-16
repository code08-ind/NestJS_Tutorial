# Module

## Description
 
A module is a class annotated with `@Module` decorator. The `@Module` decorator provides metadata that Nest makes use of to organize the application structure.

Each application has at least one module, a root module. The root module is the starting point Nest uses to build the application graph - the internal data structure Nest uses to resolve module and provider relationships and dependencies.

It is highly recommended to organize your application into modules and components. While small applications may have only one module, most applications have many more feature modules.