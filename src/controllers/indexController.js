const pool = require('../bd/conexion');
const consulta = require('../models/index');
const bcryptjs = require('bcryptjs');
const e = require('express');

const RegistrarUsuarios = (req,res) =>{
    const {nombre,correo,password1,password2} = req.body;
    try{
        if(nombre && correo && password1 && password2){
            consulta.ObtenerUsuarioCorreo(pool,{correo},async (err,data) =>{
                if(!data.rows.length == 0){
                    console.log(data.rows);
                    res.json('Existe el usuario');
                }else{
                    if(password1 == password2){
                        let passHash = await bcryptjs.hash(password1,8);
                        consulta.RegistrarUsuario(pool,{nombre,correo,passHash},(err,result)=>{
                            if(!err){
                                res.json('Usuario Ingresado');
                            }else{
                                console.log('Error al ingresar usuario');
                            }
                        });
                    }else{
                        res.json('Las claves no son iguales');
                    }
                }
            })
        }else{
            res.json('Faltan datos');
        }
    }catch(e){
        throw e;
    }
}

const IniciarSesion = (req,res) => {
    const {correo,password} = req.body;
    try{
        consulta.IniciarSesion(pool,{correo}, async(err,data)=>{
            
        })
    }catch(e){
        throw e;
    }
    
}



module.exports = {
    RegistrarUsuarios,
    IniciarSesion
}












