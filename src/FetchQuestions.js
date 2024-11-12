import axios from 'axios';


const getAllQuestions = (setQuestions) => {
  axios.get('https://hounter-backend-1.onrender.com')
    .then(({ data }) => {
      console.log(data);
      setQuestions(data);
    })
    .catch((error) => console.error("Error fetching questions:", error));
};

const addQuestion = (name, setName, setQuestions) => {
    axios.post('https://hounter-backend-1.onrender.com/saveQuestions', {name})
    .then((data) =>{
        console.log(data);
        setName('');
        getAllQuestions(setQuestions)
    })
}

export { getAllQuestions, addQuestion };
