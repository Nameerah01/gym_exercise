export const exerciseOptions={
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY
        },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '6c8f00c9c7mshadfacc21eb0a97bp158937jsn67516418021b',
  },
};




export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
}