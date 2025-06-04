# 1. Imagen base oficial de Go
FROM golang:1.20

# 2. Directorio dentro del contenedor
WORKDIR /app

# 3. Copiar archivos de Go y descargar dependencias
COPY go.mod ./
COPY go.sum ./
RUN go mod download

# 4. Copiar todo el código y compilar
COPY . .
RUN go build -o main .

# 5. Exponer el puerto (debe ser el 8080 porque tu frontend lo necesita así)
EXPOSE 8080

# 6. Comando para iniciar la app
CMD ["./main"]
