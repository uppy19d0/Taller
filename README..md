
# Comandos Básicos

* Creación de un repositorio.

     git init .

* Clonar un repositorio.

    git clone url

* Añade un directorio de manera recursiva, o un archivo para que sea incluido en el próximo commit.

    git add nombre
* Añade todos los archivos para que sea incluido en el próximo commit.

    git add --all

# También
git add .

Eliminar un archivo o directorio de manera recursiva.

git rm nombre

Mover archivo o directorio a una nueva ruta.

# -f : Sobre-escribe los cambios locales no guardados
git mv nombre

Imprime un reporte del estado actual del árbol de trabajo local.

# git st, por el alias
git status

Muestra la diferencia entre los cambios en el árbol de trabajo local.

git diff ruta

Muestra las diferencias entre los cambios registrados y los no registrados.

git diff HEAD ruta

Marca el archivo para que no sea incluido en el próximo commit.

git reset HEAD ruta

Realiza el commit de los archivos que han sido registrados (con git-add)

-a : Automáticamente registra todos los archivos modificados.
-m 'Texto del commit aquí' : Añade automáticamente el commit con el comentario.
git commit

Deshace commit & conserva los cambios en el árbol de trabajo local.

git reset --soft HEAD^

Restablece el árbol de trabajo local a la versión del ultimo commit.

git reset --hard HEAD^

Elimina archivos desconocidos del árbol de trabajo local.

git clean

Muestra el log del commit, opcionalmente de la ruta especifica.

git log [ruta]

Trae los cambios desde un repositorio remoto.

git fetch [remote]

Descarga y guarda los cambios realizados desde un repositorio remoto.

git pull [remote]

Guarda los cambios en un repositorio remoto.

git push [remote]

Lista los repositorios remotos.

git remote

Añade un repositorio remoto a la lista de repositorios registrados.

git remote add remote url

Cambia el árbol de trabajo local a la rama indicada.

# -b rama : Crea la rama antes de cambiar el árbol de trabajo local a dicha rama.
git checkout rama

Lista las ramas locales.

git branch

Lista las ramas remotas.

git branch -r

Eliminar un branch.

git branch -d branch

Eliminar un branch

Sobre-escribe la rama existente y comienza desde la revisión.

git branch -f rama rev

Guarda los cambios desde la rama.

git merge rama

un tracker files

git rm -r --cached <your directory>

git flow

Inicializar git flow

git flow init

Crear una feature

git flow feature start nombre_feature

Subir feature

git push origin feature/nombre_feature

Obtener feature

git pull origin feature/nombre_feature

Finalizar feature

git flow feature finish nombre_feature

Eliminar branch remota

git push origin --delete feature/nombre_feature


# LTAVAREZ
* https://github.com/uppy19d0
