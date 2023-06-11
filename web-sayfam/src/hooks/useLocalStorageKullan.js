import useLocalStorage from "./useLocalStorage";


const useLanguageStorageKullan = (previousState) =>  {

    const [english, setEnglish] =  useLocalStorage('english', previousState)

    return [english, setEnglish]

}

export default useLanguageStorageKullan;