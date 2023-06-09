import {Pool} from "pg"

let connect: any;

if (!connect) {
  new Pool({
    user:"postgres",
    password:"password",
    host:"localhost",
    port:5432,
    database: "prueba"
  })
}

export {connect}
