const db = firebase.firestore();


const taskForm = document.getElementById('task-form');

const saveTask = (title, description)=>
 db.collection('tasks').doc().set({
    title,
    description
})

const getTasks= () => db.collection('tasks').get();

window.addEventListener('DOMContentLoaded', async (e) =>{
 const querySnapshot = await getTasks();
    querySnapshot.forEach(doc => {
    console.log(doc.data())
})
 })


taskForm.addEventListener('submit', async (e)=> {
    e.preventDefault();

    const title = taskForm['task-title'];
    const description = taskForm['task-description'];

    await saveTask(title.value, description.value);

    taskForm.reset();
    title.focus();

    
})