import http from  "../http-common";

class RoomDataService{

     createRoom(data){
        return http.post(data)
    }
}

export default RoomDataService