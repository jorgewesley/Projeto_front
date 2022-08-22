/*function validateEmail(email) {} */


app.use('/', basicRoutes)
app.use('/admin', adminRoutes)
app.use('/api', apiRoutes)



// rota com parâmetros (http://localhost:8000/admin/users/:name)
adminRouter.get('/users/:name', (req, res) => {
    res.send('Faalaaa ' + req.params.name + '!')
  })

// middleware de validação para 'name'
adminRouter.param('name', (req, res, next, name) => {
    // faça a validação do 'name' aqui
    // validação blah blah
    // logar alguma coisa pra sabermos se funciona
    console.log('validando o nome: ' + name)
  
    // quando a validação acabar, salve o novo nome na requisição
    req.name = name
    // vá para a próxima coisa a fazer
    next()
  })
  
  // roteamento com parâmetro (http://localhost:8000/admin/users/:name)
  adminRouter.get('/users/:name', (req, res) => {
    res.send('Faalaaa ' + req.name + '!')
  })


  app.route('/login')
  // exibe o form (GET http://localhost:8000/login)
  .get((req, res) => {
    res.send('this is the login form')
  })
  // processa o form (POST http://localhost:8000/login)
  .post((req, res) => {
    console.log('processing')
    res.send('processing the login form!')
  })