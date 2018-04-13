import axios from 'axios';

let request = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30000
});

export function siteUrl() {
    return `${location.protocol}//${location.host}/`;
};

export function twitterAuthenticateUrl(token) {
  return "https://twitter.com/oauth/authenticate?oauth_token=" + token;
};

export function requestUserToken() {
  return request.get("connect").then((result) => result.data);
};

export function authUser(token, tokenSecret, verifier, people) {
    return request
        .post("auth", {
            token,
            tokenSecret,
            verifier
        })
        .then((result) => {
            let { accessToken, accessTokenSecret } = result.data;
  
            // sessionStorage.setItem("accessToken", accessToken);
            // sessionStorage.setItem("accessTokenSecret", accessTokenSecret);
  
            return followUsers(accessToken, accessTokenSecret, people);
        });
};

export function followUsers(accessToken, accessTokenSecret, people) {
    return request
        .post("follow", {
            accessToken,
            accessTokenSecret,
            people
        })
        .then((result) => result.data )
        .catch(error => error);
};
