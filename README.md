## Ejecución

Para el despliegue con docker:

```bash
$ docker build -t toolbox .
$ docker run -d -p 3001:3001 toolbox
```

Para ejecutar los test:

```bash
$ npm test
```

Para ejecutar el api:

```bash
$ npm start
```

## End points disponibles

Base Path:

```bash
 http://localhost:3001
```

Listar todos los Files:

```bash
 /files/list
```

Listar Conenido de todos los files:

```bash
/files/data
```

Listar contenido por File:

```bash
/files/data?fileName=<nombre de file>
```
