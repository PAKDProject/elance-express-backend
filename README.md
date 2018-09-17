# LinkedOut Backend

## This repo is part of the LinkedOut project. It is the server used as a backend for the project. 
---

### 1. Working with the repo
Most of the work is done on the development branch of the project. The master branch only holds the compiled production code.
This is done in order for the LinkedOut Deployment project to work. The deployment done by ansible bootstraps and clones the project to the server.

Use:
```
> git checkout development
```
Use this command to switch to development branch

### 2. Working with the project
- Controller generation
The repo contains a code snippet under the words of "routeController" which generates a new template for the route.
NOTE: It requires a Project Snippets VS Code extension by Peng Lv