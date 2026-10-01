const usuarios = [
    { id: 1, nome: 'Ana Silva', idade: 22, ativo: true, cargo: 'Desenvolvedora' },
    { id: 2, nome: 'Bruno Costa', idade: 17, ativo: true, cargo: 'Estagiário' },
    { id: 3, nome: 'Carlos Souza', idade: 30, ativo: false, cargo: 'Designer' },
    { id: 4, nome: 'Diana Lima', idade: 25, ativo: true, cargo: 'Tech Lead' },
];

// Exercício 1
function listarUsuarios() {
    return usuarios.map((usuario) => {
        return {
            nome: usuario.nome,
            cargo: usuario.cargo,
        };
    });
}

console.log('Lista resumida:', listarUsuarios());




// Exercício 2
function buscarUsuarioPorId(id) {
    return usuarios.find((usuario) => usuario.id === id);
}

console.log('Buscar ID 2:', buscarUsuarioPorId(2));



// Exercício 3
function listarUsuariosAtivos() {
    return usuarios.filter((usuario) => usuario.ativo === true);
}

console.log('Ativos:', listarUsuariosAtivos());



// Exercício 4
function existeUsuarioInativo() {
    return usuarios.some((usuario) => usuario.ativo === false);
}

console.log('Há inativos?', existeUsuarioInativo());



// Exercício 5
function todosUsuariosMaioresDeIdade() {
    return usuarios.every((usuario) => usuario.idade >= 18);
}

console.log('Todos maiores de idade?', todosUsuariosMaioresDeIdade());



// Exercício 6
function calcularMediaIdade() {
    const somaIdades = usuarios.reduce((soma, usuario) => {
        return soma + usuario.idade;
    }, 0);

    return somaIdades / usuarios.length;
}

console.log('Média de idade:', calcularMediaIdade());
