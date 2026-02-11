let userName = `Funval`
let password = `Progra123`

let inputUserName
let inputPassword
let tries = 0
let balance = 1000


do  {
    inputUserName = prompt(`Ingresa Tu nombre de Usuario: `)
    inputPassword = prompt(`Ingresa Tu Contraseña: `)
    if (userName === inputUserName || password === inputPassword){
        let continueMenu = true
        do {
            let options = parseInt(prompt(`
            Ingresa: 
            1 - Retiro
            2 - Deposito
            3 - Ver Saldo
            4 - Salir
            `))
            switch (options) {
                case 1 :
                    let withdrawal = parseFloat(prompt(`Ingresa la cantidad del Retiro: `))
                    if (withdrawal < balance) {
                        balance = balance - withdrawal
                        alert(`Haz retirado $${withdrawal}`)
                    } else alert(`Fondos Insuficientes`)
                    break;
                case 2 : 
                    let deposit = parseInt(prompt(`Ingresa la cantidad a Depositar: `))
                    balance = balance + deposit
                    alert (`Haz hecho un deposito de: $${deposit}`)
                    break;
                case 3 : 
                    alert(`Tu Saldo es $${balance}`)
                    break;
                case 4 :
                    alert(`Gracias por usar nuestro servicio!`)
                    continueMenu = false
                    tries = 5
                    break;
                default:
                    alert(`Ingresa opcion Correcta`)
            }
        } while(continueMenu)
        
    } else {
        if (tries < 2) {
        alert(`Credenciales Incorrectas, Intente Nuevamente`)
        }
        tries ++
    }
    
} while( tries < 3)

if (tries === 3 ){
    alert(`Haz utilizado el limite de intentos, Contacta a tu proveedor`)
}
