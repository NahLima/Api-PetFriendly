
const app = require('./src/app')
const PORT = 5555

// app.listen(process.env.PORT || PORT,()=>{
//     console.log(`Servidor rodando  http://localhost:${PORT}`)
// })
app.listen(PORT,function() {
    console.log(`Servidor rodando  http://localhost:${PORT}`)
})

