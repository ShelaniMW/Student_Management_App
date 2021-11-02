import axios from 'axios';

const CLASS_API_BASE_URL = "http://localhost:8080/api/classes";

class ClassService{

    getClasses(){
        return axios.get(CLASS_API_BASE_URL);
    }
    createClass(class1){
        return axios.post(CLASS_API_BASE_URL, class1);
    }
    deleteClass(id){
        return axios.delete(CLASS_API_BASE_URL + '/' + id);
    }
    getClassById(id){
        return axios.get(CLASS_API_BASE_URL + '/'+id);
    }
    updateClass(class1,id){
        return axios.put(CLASS_API_BASE_URL + '/'+id,class1);
    }
    

}

export default new ClassService()