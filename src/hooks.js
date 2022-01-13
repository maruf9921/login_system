import {cookieExtractor} from '$lib/function';

export let handle = async ({request, resolve}) => {
    let cookies = cookieExtractor(request.headers.cookie||"") || {}
    request.locals.authenticated = cookies["cookieidentity"] ? true : false
    const response = await resolve(request)
    return {
      headers: {authenticated : cookies["cookieidentity"] ? true : false},
      ...response
    }
  }

export let getSession = (request) => {
    return {authenticated: request.locals.authenticated}
}