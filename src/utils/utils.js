import MD5 from 'crypto-js/md5';

const API_URL = process.env.REACT_APP_BASE_API_URL;

const getHash = (ts, secretKey, publicKey) => {
    return MD5(ts + secretKey + publicKey).toString();
  };

  // get all characters and data 
  
const fetchHeroes = async (value) =>{
    let baseUrl = `${API_URL}/v1/public/characters`

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey= process.env.REACT_APP_API_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey)

    let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

    try{
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        return data
    } catch(err){
        console.error(err)
        return
    }
}

export {fetchHeroes};