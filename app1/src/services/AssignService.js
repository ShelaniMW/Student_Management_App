import axios from 'axios';

const CLASS_API_BASE_URL = "http://localhost:8080/api/assign";

class AssignService{

    getAssigns(){
        return axios.get(CLASS_API_BASE_URL);
    }
    createAssign(assign){
        return axios.post(CLASS_API_BASE_URL, assign);
    }
    

}

export default new AssignService()