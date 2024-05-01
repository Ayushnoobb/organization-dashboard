// AddEntryNews.tsx
import React, { useEffect, useState } from 'react';
import PrevBtn from '../../../ui/prevbutton/BackBtn';
import Navbar from '../../../components/navbar/Navbar';
import TextEditor from '../../../components/TextEditor/TextEditor';
import { UIInput } from '../../../ui/uiinput/UIInput';
import { NewsSchema } from '../../../utils/zod/news.schema';
import { dismissToast, errorToast, loadingToast, successToast } from '../../../utils/toastify';
import { dataService } from '../../../utils/axios';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../redux/store';
import { CreateNewsThunk } from '../../../redux/actions/news/createNews.actions';
import { useAppDispatch } from '../../../utils/redux.utils';
import { resetState } from '../../../redux/slices/news/createNews.slices';
import { useNavigate } from 'react-router-dom';
import { GetAllNewsData } from '../../../redux/actions/news/NewsData.actions';

export const AddEntryNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [toast,  setToast] = useState(false)
  const navigate = useNavigate()

  const dispatch = useAppDispatch();
  const { x_api } = useSelector((state : RootStore) => state.x_api_key)
  const  { data } = useSelector((state : RootStore) => state.login)
  const { isFulfilled , isRejected ,isLoading} = useSelector((state : RootStore) => state.create_news)



  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!image){
      errorToast('Please provide image')
      return
    }
    const validation = NewsSchema.safeParse({ title, description });
    if (validation.error) {
      console.log(validation.error)
      errorToast(validation.error.issues.at(0)?.message as string);
      return;
    }

    // create form to send
    const form = new FormData()
    form.append('title' , title)
    form.append('description' , description)
    form.append('image' , image)
    dataService.setApiKey(x_api!)
    dataService.setToken(data.token!)
    dispatch(CreateNewsThunk(form))
  };

  useEffect(() => {
    if (isLoading && !isRejected && !isFulfilled) {
      loadingToast('Creating news');
      setToast(true)
    }
  
    if (isFulfilled && !isLoading && !isRejected) {
      toast && dismissToast()
      successToast('Successfully created news');
      setToast(true)
      dispatch(resetState())
      dispatch(GetAllNewsData())
      navigate(-1)
    } 
    if (isRejected && !isLoading && !isFulfilled) {
      toast && dismissToast()
      errorToast('Error creating news');
      setToast(true)
      dispatch(resetState())
    }
    
  }, [isFulfilled, isRejected, isLoading]);
   

  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Add Entry - News" showBars />
        </div>

        <PrevBtn  />
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <div className="input">
              <UIInput
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
                name="title"
                label="Title"
                type="text"
              />
            </div>
            <div className="div w-full">
              <label htmlFor="file inputfield-label ">News Description</label>
              <TextEditor value={description} setValue={setDescription} />
            </div>
            <div className="input flex">
              <label htmlFor="file inputfield-label ">News Banner</label>
              <input
                className='inputfield-input'
                type="file"
                id="file"
                onChange={handleImageChange}
                accept="image/*"
              />
              <div>
                {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px' }} />}
              </div>
            </div>
            <div className="btn-wrapper">
              <button className="btn btn-submit form-btn" type='submit'>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEntryNews;
