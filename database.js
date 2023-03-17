import mysql from "mysql2"
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,

}).promise()

export async function getRegistros(){
    const [rows] = await pool.query("Select * from REGISTROS")
    return rows
}

export async function createRegistro(param){
    let date = new Date();
    await pool.query(`
        Insert into REGISTROS(instrumentType, createdAt)
        VALUES(?, ?)`, [param, date])
    console.log("Realizado con exito")
}

export async function deleteRegistros(){
    await pool.query(`
        DELETE FROM REGISTROS
    `)
}