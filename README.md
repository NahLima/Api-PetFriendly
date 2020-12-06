# Api-PetFriendly
_Projeto final {reprograma}_ 

Uma REST API com CRUD, NODE.js e MongoDB. A intenção desta aplicação é permitir aos utilizadores inserirem locais PetFriendly na base de dados mongoDB, a base crescerá com a inserção de registros dos utilizadores(as). 

**mongoose** = biblioteca wrapper 

**process.env** = vai pegar as variáveis de ambiente, é usado para vc subir para o heroku ou outra plataforma/servidor. 

**express** = ajuda a fazer a tratativa de rotas e requests http

**body-parser** = faz com que o node entenda as requesições, recebendo as informações json e que ele possa entender os parametros de url

**config ()** =método que vai buscar as variáveis de ambiente que estão no .env 

**Dotenv.** = Essa é a ferramenta utilizada para orquestrar as variáveis ambiente de um projeto. O nome dela sugere o arquivo em que as informações ficarão.
env.exemplo = consegue criar as variaveis de ambiente, templete que o .env vai usar como guia 

**Hash** = função matemárica aplicada sobre um conjunto de dados que gera outro número. Algoritmo usado na aplicação bcrypt

**Token JWT** = é um padrão (RFC-7519) que define como transmitir e armazenar objetos Json de forma compacta e segura. 

**Signature do Token** = concatenação do Header + Payload + Secret
Secret = é a chave que vamos usar para gerar o token

### Autenticação é diferente de Autorização, nessa aplicação vamos usar a autenticação
**Autenticação** // quem é você --> Logar/deslogar/verificar senha
**Autorização** // quem pode ver você --> Permissão/Controle e Acessos

**heroku** = servidor na nuvem, permite que outros usuários utilizem nossas aplicações

**jwt.sign** = É formado por três seções: Header, Payload e Signature. Formado através de informações que vem do seu usuário  gerando um token em cima da informaçào que você passar

