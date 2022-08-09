export const setCookie = (name: string, value: any, options: any) => {
    let date = new Date();
    date.setDate(date.getDate() + options.expires);
    let Cookie = `${name}=${value};expires=${date.toUTCString()};${
      options.path !== undefined ? 'path=' + options.path : ''
    };`;
  
    document.cookie = Cookie;
  };
  
  export const getCookie = (name: string) => {
    let value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return value ? value[2] : null;
  };
  
  export const removeCookie = (name: string) => {
    let date = new Date();
    date.setDate(date.getDate() - 100);
    let Cookie = `${name}=;Expires=${date.toUTCString()}`;
    document.cookie = Cookie;
  };