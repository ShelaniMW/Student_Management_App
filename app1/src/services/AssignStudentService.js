import axios from 'axios';

const CLASS_API_BASE_URL = "http://localhost:8080/api/records";

class AssignStudentService{

    getRecords(){
        return axios.get(CLASS_API_BASE_URL);
    }
    createRecords(record){
        return axios.post(CLASS_API_BASE_URL, record);
    }
    deleteRecord(id){
        return axios.delete(CLASS_API_BASE_URL + '/' + id);
    }
    getRecordById(id){
        return axios.get(CLASS_API_BASE_URL + '/'+id);
    }
    updateRecord(record,id){
        return axios.put(CLASS_API_BASE_URL + '/'+id,record);
    }
    

}

export default new AssignStudentService()