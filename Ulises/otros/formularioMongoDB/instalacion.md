Nodejs y MongoDB
=================

**Instalación**

Abrimos el terminal e instalamos Homebrew

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Instalamos Nodejs
```
brew install node
```

Instalamos MongoDB
```
brew install mongodb
```


**Preparamos el entorno**

En la carpeta donde esta *app.js*, instalamos las dependencias de nuestra app
```
npm install
```

**Arrancamos la aplicación**

Arrancamos mongoDB y definimos el directorio
```
mongod --dbpath /miruta/masrutas...
```

Cuando mongodb ya esta funcionando, arrancamos nuestra app con Nodejs
```
node app.js
```

**Usando el formulario**

Abrimos el *index.html* en el navegador.
*Nota: El index es independiente de nuestra aplicación*


**Exportar los datos de MongoDB a un .json y .csv**

Utilizaremos *mongoexport* para exportar nuestra colección *inscritos* en la carpeta.

```
mongoexport --host 0.0.0.0:27017  --db test --collection inscritos  --out inscritos.json
mongoexport --host 0.0.0.0:27017  --db test --collection inscritos  --out inscritos.csv
```