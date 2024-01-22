import axios from 'axios'

const BASE_URL='http://5.189.180.8:8010'
const axiosAPI=axios.create({
    baseURL:BASE_URL
    
})
export async function get (url){
return await axiosAPI.get(url).then((response)=>response.data).catch((error)=>Promise.reject(error))
}

export async function post(url,data){
    return await axiosAPI.post(url,{...data}).then((response)=>{
        return response.data
    })
}
