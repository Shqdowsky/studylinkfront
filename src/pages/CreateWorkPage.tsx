import React, {useState} from 'react';
import MyInput from '../components/UI/MyInput';
import MyButton from '../components/UI/MyButton';
import { IWork } from '../components/models/IWork';
import { postApi } from '../service/PostService';
import SelectItem from '../components/SelectItem/SelectItem';
import { useSubject } from '../context/SubjectContext';
import FileInput from '../components/FileInput/FileInput';
import { FileContext } from '../context/FileContext';
import Popup from '../components/Popup/Popup';

const CreateWorkPage = () => {
    const [responseId, setResponseId] = useState("")
    const [workBody, setWorkBody] = useState({title: "", body: "", category: ""});
    const [createWork, {isError, isLoading, error, data}] = postApi.useCreateWorkMutation()
    const {selectedSubject} = useSubject()
    const [open, setOpen] = useState(false)

    const handleCreate = async () => {
        const formData = new FormData();

        formData.append("title", workBody.title);
        formData.append("body", workBody.body);
        formData.append("predmet", selectedSubject);

        if (selectedFiles) {
            Array.from(selectedFiles).forEach((file) => formData.append("document", file));
        }

        try{
            const response = await createWork(formData);
            setResponseId(response.data._id);
            setWorkBody({ title: "", body: "", category: "" });
            setOpen(true);
            return responseId
        } catch(e){
        }
    }

    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    return (
        <FileContext.Provider value={{
            selectedFiles,
            setSelectedFiles
        }}>
        <div className='create-work-page'>
            {isLoading && <p style={{textAlign: "center", fontSize: "1.2vw"}}>Loading...</p>}
            {isError && <p style={{color: 'red', fontSize: "1.2vw"}}>Заповніть всі поля</p>}
            <h1  className='create-work-page__title'>Створити роботу</h1>
            <div className='create-work-page__body create-work-page-body'>
                <div className='container'>
                    <div className='create-work-page-body__content'>
                        <MyInput value={workBody.title} onChange={e => setWorkBody({...workBody, title: e.target.value})} placeholder='Назва'/>
                        <MyInput value={workBody.body} onChange={e => setWorkBody({...workBody, body: e.target.value})} placeholder='Опис'/>
                        <SelectItem/>
                        <FileInput/>
                        <MyButton onClick={handleCreate}>Створити</MyButton>
                        { !error && <Popup open={open} onClose={() => setOpen(false)} link={`https://studylink.website/works${responseId}`}/> }
                    </div>
                </div>
            </div>
        </div>
        </FileContext.Provider>
    );
};

export default CreateWorkPage;