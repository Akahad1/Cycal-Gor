import { useEffect } from "react"

const useTitel=titel=>{
    useEffect(()=>{
        
        document.title=`Cycal Gor- ${titel}`
    },[titel])
}

export default useTitel;