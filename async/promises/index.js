

const loginUser = (email, pasword) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const error = true;
            
            if (error) {
                return reject("mock falied to the login user")
            }

            console.log("mock user loged success")
            resolve({ email, pasword });
        }, 3000);
    });
};

const user = loginUser("test@testuser.com", "1234232")
  .then((user) => {
        console.log("mock user loged success");
  })
  .catch ((errorMessage) => {
            console.log(errorMessage);
  });
