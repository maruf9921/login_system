import {setAuthCookies} from "$lib/function";

export async function post({ body }){
    const user = await fetch('https://strapi4test.herokuapp.com/api/auth/local', {
        method: 'POST',
        body: JSON.stringify({identifier: body.username, password: body.password,}),
        headers : {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())

    if(user.error){
        return{
            body: {error: true, message: "Invalide user ! password"}
        }
    }
    let cookie = setAuthCookies(user);
    return {
        status:200,
        headers: {'Set-Cookie': cookie},
        body: {error: false, user}
    }
}

export const get = () => {
    return {
      headers: {
        'Set-Cookie': "cookieidentity=deleted; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; httpOnly=true; secure=true;"
      },
      body: {status: 200,success: true, message: 'Logged out successfully'}
    }
  }