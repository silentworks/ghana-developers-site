export function getTokens() {
    if (!process.browser) {
        return {
            tokenSecret: null,
            accessToken: null,
            accessTokenSecret: null
        };
    };
    
    return { 
        tokenSecret: sessionStorage.getItem("oauth_token_secret"),
        accessToken: sessionStorage.getItem("accessToken"),
        accessTokenSecret: sessionStorage.getItem("accessTokenSecret")
    };
};

export function isEmpty(val) {
    return val === null || val === "undefined";
};
