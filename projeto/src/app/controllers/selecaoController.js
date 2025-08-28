import conexao from '../database/conexao.js'
import selecaoRepository from '../repositories/selecaoRepository.js'

class SelecaoController{

    index(req, res){
        const row = selecaoRepository.findAll()
        res.json(row)
    }

    show(req, res){
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, resultado) =>{
        const linha = resultado[0]
        if(erro){
            res.status(404).json( {'erro': erro})
        }else{
            res.status(200).json(linha)
        }
    })
}

    store(req, res){
        const selecao = req.body
        const sql = "INSERT INTO selecoes SET ? ;"
        conexao.query(sql, selecao, (erro, resultado) =>{
            if(erro){
                res.status(400).json( {'erro': erro})
            }else{
                res.status(201).json(resultado)
            }
        })
    }

    update(req,res){
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    conexao.query(sql, [selecao, id], (erro, resultado) =>{
        if(erro){
            res.status(404).json( {'erro': erro})
        }else{
            res.status(200).json(resultado)
        }
    })
}

    delete(req,res){
    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, resultado) =>{
        if(erro){
            res.status(404).json( {'erro': erro})
        }else{
            res.status(200).json(resultado)
        }
    })
}

}

// padrão Singleton
export default new SelecaoController()