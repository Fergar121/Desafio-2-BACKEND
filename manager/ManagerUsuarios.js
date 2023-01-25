import fs from 'fs';

const path = './files/Usuario.json';

export default class ProductManager {
    consultarUsuario = async() => {
        try{
            if(fs.existsSync(path)){
                const data = await fs.promises.readFile(path, 'utf-8')
                const users = JSON.parse(data)
                return users;
            }else{
                return[]
            }
        } catch{
            
        }
        
    }

    crearUsuario = async(usuario) => {
        const users = await this.consultarUsuario();
     
            if(users.length === 0){
                usuario.id = 1;
            } else{
                usuario.id = users[users.length -1].id + 1; 
            }
        users.push(usuario);
        await fs.promises.writeFile(path, JSON.stringify(users, null, 't'));
    }
    

}