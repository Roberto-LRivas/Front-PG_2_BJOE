import { useFetch } from "../hooks/useFetch";


export const LoginPost = async (url = '', {body = '',headers = '', params = '', method = ''}) => {
    console.log('Entro en login post',url);
    const data = await useFetch(url);
    console.log(data);
    return data;
}