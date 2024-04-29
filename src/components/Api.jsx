import axios from 'axios'


const searchImages=async (term)=>{

  const response=await axios.get("https://api.unsplash.com/search/photos",{
      headers:{
        Authorization:'Client-ID 5ICtmeFyKzo6KIDvpooOiaSYiEEYEd8ojTye87vX7xU'
      },
      params:{
        query:term
      }
    })
//    debugger;
    console.log(response);
    return response;
  }

  
  export default searchImages;