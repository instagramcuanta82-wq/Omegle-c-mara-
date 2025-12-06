const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (html, js, imágenes)
app.use(express.static(path.join(__dirname)));

// Iniciar servidor
app.listen(PORT, () => {
    console.log("Servidor funcionando en el puerto " + PORT);
});
