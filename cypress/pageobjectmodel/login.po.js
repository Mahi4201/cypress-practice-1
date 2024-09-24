class loginlocaters{

    usrenamelocater(){
        return 'input[name="username"]'
    }
    passwordlocater(){
        return 'input[type="password"]'
    }
    loginbuttonlocater(){
        return 'button[type="submit"]'
    }

}

const obj = new loginlocaters()

export default obj