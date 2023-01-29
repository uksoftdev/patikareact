import axios from "axios";

const getUser = (userId) => {
    return new Promise(async (resolve,reject)=> {
        const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    
        resolve(user);
    });
    
}

const getPost = (userId) => {
    return new Promise(async (resolve,reject)=> {
        const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    
        resolve(post);
    });
    
}


export default async function getData(userId){
try {
   const user = await getUser(userId);     
   const post = await getPost(userId)
   const sumData = [user,post]
   return sumData;
} catch (error) {
    console.log(error);
}
}

