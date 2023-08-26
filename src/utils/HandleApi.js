import axios from 'axios'

const baseUrl = "https://todo-app2-a0bk.onrender.com"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data)
    })
}


const addToDO = (text, setText, setToDo) =>{
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDO = (toDoId, text, setText, setToDo, setIsUpdating) =>{
    axios
    .post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDO = (_id, setToDo) =>{
    axios
        .post(`${baseUrl}/delete`, {_id})
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

export {getAllToDo, addToDO, updateToDO, deleteToDO}