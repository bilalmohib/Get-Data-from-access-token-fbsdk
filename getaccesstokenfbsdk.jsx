 initUser = (token) => {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,friends&access_token=' + token)
            .then((response) => {
                response.json().then((json) => {
                    const ID = json.id
                    console.log("ID " + ID);

                    const EM = json.email
                    console.log("Email " + EM);

                    const FN = json.first_name
                    console.log("First Name " + FN);
                })
            })
            .catch(() => {
                console.log('ERROR GETTING DATA FROM FACEBOOK')
            })
    }
