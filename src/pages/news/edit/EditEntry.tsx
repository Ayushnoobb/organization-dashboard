import React, { useEffect, useRef, useState } from 'react';
import PrevBtn from '../../../ui/prevbutton/BackBtn';
import Navbar from '../../../components/navbar/Navbar';
import TextEditor from '../../../components/TextEditor/TextEditor';
import { UIInput } from '../../../ui/uiinput/UIInput';
import { NewsSchema } from '../../../utils/zod/news.schema';
import { dismissToast, errorToast, loadingToast, successToast } from '../../../utils/toastify';
import { dataService } from '../../../utils/axios';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../redux/store';
import { EditNewsThunk } from '../../../redux/actions/news/editNews.actions';
import { GetAllNewsData, GetIndividualNewsData } from '../../../redux/actions/news/NewsData.actions';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../utils/redux.utils';
import { S3_URL } from '../../../constants/constants';
import { resetState } from '../../../redux/slices/news/editNews.slices';

export const EditEntryNews = () => {
  const  { id  } = useParams()
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [toast, setToast] = useState(false);

  const dispatch = useAppDispatch();
  const { x_api } = useSelector((state: RootStore) => state.x_api_key);
  const { data } = useSelector((state: RootStore) => state.login);
  const didMount = useRef<boolean>(false);
  const { news_by_id } = useSelector((state: RootStore) => state.individual_news);
  const { data: IndividualNewsData } = news_by_id;
  const { isFulfilled, isRejected, isLoading } = useSelector((state: RootStore) => state.edit_news);

  if (!id) navigate(-1);
  
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      dataService.setApiKey(x_api!)
      id && dispatch(GetIndividualNewsData(id));
    }
  }, []);
  console.log(IndividualNewsData)
  useEffect(() => {
    if (IndividualNewsData) {
      setTitle(IndividualNewsData.title);
      setDescription(IndividualNewsData.description);
    }
  }, [IndividualNewsData]);

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
    const form = new FormData();
    form.append('title', title);
    form.append('description', description);
    if (image) {
      form.append('image', image);
    }
    dataService.setApiKey(x_api!);
    dataService.setToken(data.token!);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = NewsSchema.safeParse({ title, description });
    if (validation.error) {
      errorToast(validation.error.issues.at(0)?.message as string);
      return;
    }
    dataService.setApiKey(x_api!);
    dataService.setToken(data.token!);
    dispatch(EditNewsThunk({id , title , description}));
  };
  useEffect(() => {
    if (isLoading && !isRejected && !isFulfilled) {
      loadingToast('Editing news');
      setToast(true)
    }
  
    if (isFulfilled && !isLoading && !isRejected) {
      toast && dismissToast()
      successToast('Successfully updated news');
      setToast(true)
      dispatch(resetState())
      dispatch(GetAllNewsData())
      navigate(-1)
    } 
    if (isRejected && !isLoading && !isFulfilled) {
      toast && dismissToast()
      errorToast('Error updating news');
      setToast(true)
      dispatch(resetState())
    }
    
  }, [isFulfilled, isRejected, isLoading]);

  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Edit News" showBars />
        </div>

        <PrevBtn />
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
              <label htmlFor="file inputfield-label">News Description</label>
              <TextEditor value={description} setValue={setDescription} />
            </div>
            <div className="input flex">
              <label htmlFor="file inputfield-label">News Banner</label>
              <div>
                {imagePreview ?  
                <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px' }} /> : 
                <img src={S3_URL + IndividualNewsData?.image} alt="Existing Banner" style={{ maxWidth: '200px' }} />}
              </div>
              <input
                className="inputfield-input"
                type="file"
                id="file"
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
            <div className="btn-wrapper">
              <button className="btn btn-submit form-btn" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEntryNews;
