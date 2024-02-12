export default function fromForm(id){
const form = document.querySelector(id);

console.log(form)

const getFormData =(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);

    const dataFromEntries = Object.fromEntries(formData.entries);
    console.log(dataFromEntries);
    const dataToJson = JSON.stringify(dataFromEntries);
    console.log(dataToJson);
        
}


}