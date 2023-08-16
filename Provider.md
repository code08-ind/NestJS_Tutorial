# Provider

## Description

Providers are fundamentals to Nest. Providers are plain JavaScript classes that are declared as providers in module.

Classes such as services, repositories or helpers can be treated as providers simply by adding Nest's `@Injectable()` decorator.

Providers can be injected into a class through the constructor and Nest will handle resolving the dependencies, making dependency management extremely easy.