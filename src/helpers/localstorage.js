class localstorage {
    
    addToLocalStorage(list,data){
        let itemsArray = localStorage.getItem(list) ? JSON.parse(localStorage.getItem(list)) : [];
        if(itemsArray.length){
            for (const key in itemsArray) {
                if (itemsArray[key].imdbID === data.imdbID) {
                    return;
                }
            }
            itemsArray.push(data);
            localStorage.setItem(list,JSON.stringify(itemsArray));
        } else {
            itemsArray.push(data);
            localStorage.setItem(list,JSON.stringify(itemsArray));
        }
    }

    deleteFromLocalStorage(list,data) {
        let itemsArray = localStorage.getItem(list) ? JSON.parse(localStorage.getItem(list)) : [];
        if(itemsArray.length){
            for (const key in itemsArray) {
                if (itemsArray[key].imdbID === data.imdbID) {
                    itemsArray.splice(key,1);
                    localStorage.setItem(list,JSON.stringify(itemsArray));
                }
            }
        }
    }

    getLikeList(){
        let list = JSON.parse(localStorage.getItem('likeList'));
        return list;
    }

    getWatchedList(){
        let list = JSON.parse(localStorage.getItem('watchedList'));
        return list;
    }
}
export default new localstorage();