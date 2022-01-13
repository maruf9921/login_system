export let setAuthCookies = (user) =>{
    let date = new Date();
    date.setDate(date.getDay() + 2);
    let cookieString = "cookieidentity" + "=" + user.jwt + "; expires" + date + "; path=/; httpOnly=true; secure=true;"
    return cookieString;
}

export let cookieExtractor = (cookiesString) =>{
    return cookiesString == "" ? undefined : cookiesString.split(";")
    .map(function(cookieString) {
      return cookieString.trim().split("=");
    })
    .reduce(function(acc, curr) {
      acc[curr[0]] = curr[1];
      return acc
    }, {});
  }