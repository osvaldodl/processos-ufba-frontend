export const Usuario = {
    nomeCompleto: '',
    matricula: '',
    curso: '',
    endereco: '',
    bairro: '',
    cep: '',
    celular: '',
    email: '',
    password: '', 
    validate: () => {        
        if(this && (this.nomeCompleto === '' || this.curso === '' || this.endereco ===  '' || this.bairro === '' || this.password === '' 
            || this.matricula.length < 9 || this.cep < 9 || this.celular < 15)){
            return false
        }else{
             return true;
        }
    }
}



export function getUserLogged(){}

export function isUserLogged(){}
