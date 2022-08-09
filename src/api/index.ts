import login from './login';

export const signIn = (email: string, password: string) => {
    login.post('/users/login', {email, password})
}

export const signUp = (email: string, password: string) => {
    login.post('/users/create', {email, password})
}
