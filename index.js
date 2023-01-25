import ProductManager from './manager/ManagerUsuarios.js'

const ProdMan = new ProductManager();

const productManager = async() => {
    let usuarios = await ProdMan.consultarUsuario();
    console.log(usuarios)

    const user = {
        nombre: 'Fermin',
        apellido: 'Garcia',
        edad: 22,
        curso: 'Backend - Coderhouse'
    };

    await ProdMan.crearUsuario(user);

    usuarios= await ProdMan.consultarUsuario();

    console.log(usuarios)
}
productManager();