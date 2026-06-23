@echo off
cd C:\Users\mdero\projects\pizzeria-api-deploy
if not exist packages mkdir packages

rem Copia shared-types
if exist packages\shared-types rmdir /s /q packages\shared-types
xcopy "C:\Users\mdero\projects\pizzeria-app\packages\shared-types\*" "packages\shared-types\" /E /I /Q
if exist packages\shared-types\node_modules rmdir /s /q packages\shared-types\node_modules
if exist packages\shared-types\dist rmdir /s /q packages\shared-types\dist

rem Copia shared-validation
if exist packages\shared-validation rmdir /s /q packages\shared-validation
xcopy "C:\Users\mdero\projects\pizzeria-app\packages\shared-validation\*" "packages\shared-validation\" /E /I /Q
if exist packages\shared-validation\node_modules rmdir /s /q packages\shared-validation\node_modules
if exist packages\shared-validation\dist rmdir /s /q packages\shared-validation\dist

echo Copia completata
dir packages
