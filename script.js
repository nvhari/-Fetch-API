const API_URL = 'https://randomuser.me/api/'

 

async function  fetchRandomUser(){
    try{
        const response = await fetch(API_URL)
        const data = await response.json()
        const user = data.results[0]
        // console.log(user)

         //Extracting  details
         const name =`${user.name.first} ${user.name.last}`
         const email = user.email
         const picture = user.picture.large
        //  console.log(picture)

         //updating screen

         document.getElementById("user-picture").src = picture;
         document.getElementById("user-name").innerText = name;
         document.getElementById("user-email").innerText = email;

         
    }
    catch(error){
        console.log('Error fetching the random user:', error);

    }

};
 

fetchRandomUser()