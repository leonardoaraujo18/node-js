import conexao from '../database/conexao.js'

class SelecaoRepository{
    // CRUD
    create(){}

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) =>{
            conexao.query(sql, (erro, resultado) =>{
                if(erro) return reject('Não foi possive localizar')
                // fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findById(){}
    update(){}
    delete(){}

}

export default new SelecaoRepository()