# qual imagem quero baixar
FROM node

# definir o diretório de trabalho
# /usr/app
WORKDIR  /usr/src/app

# copiar o package.json para o diretório de trabalho => /usr/src/app
COPY package.json ./

#baixar as dependências, nem todas imagens estao no yarn, por isso uso do npm 
RUN npm install

# copiar tudo (.), (.)  código para o diretório de trabalho
COPY . .

# expor a porta 3333
EXPOSE 3333

# comando para executar a aplicação
CMD ["npm", "run", "dev"]