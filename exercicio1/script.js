const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta=(obj)=>{
    return obj ={
        nome:objeto.nome.toUpperCase(),
        profissao:objeto.profissao.toUpperCase(),
        username:objeto.username.toUpperCase(),
        senha:objeto.senha.toUpperCase()
    }
} 
//console.log(caixaAlta(objeto));

const textoCorrido =(obj)=>{
    return obj= (`Olá ${obj.nome}, sua profissão é ${obj.profissao}, seu username é ${obj.username} e sua senha é ${obj.senha}`);
}

//console.log(textoCorrido(objeto));


const novaFuncao= (obj,callback)=>{
    console.log(callback(obj));
}

novaFuncao(objeto,caixaAlta);
novaFuncao(objeto,textoCorrido);