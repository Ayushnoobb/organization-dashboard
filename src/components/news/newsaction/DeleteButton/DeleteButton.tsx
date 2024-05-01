import React, { useEffect, useState } from 'react'
import { RootStore } from '../../../../redux/store';
import { useAppDispatch } from '../../../../utils/redux.utils';
import { errorToast , loadingToast, successToast } from '../../../../utils/toastify';
import { resetState } from '../../../../redux/slices/news/deleteNews.slices'; //cahnge
import { dataService } from '../../../../utils/axios';
import { useSelector } from 'react-redux';
import "../../../../style/main.css"
import { DeleteNewsThunk } from '../../../../redux/actions/news/deleteNews.actions';

const DeleteButton : React.FC<{id : string}> = ({id}) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false);  
  const [toastDisplayed, setToastDisplayed] = useState(false);

  const { isFulfilled : blockFulfill , isLoading : blockPending , isRejected : blockRejected } = useSelector((state : RootStore) => state.delete_news)
  const  { x_api } = useSelector((state : RootStore) => state.x_api_key)
  const { data } = useSelector((state : RootStore) => state.login)

  useEffect(() => {
    if (blockFulfill && isLoading && !toastDisplayed) {
      setIsLoading(false); 
      setToastDisplayed(true); 
      successToast('News deleted successfully!');
      dispatch(resetState());
    }
    if (blockRejected && isLoading && !toastDisplayed) {
      setIsLoading(false); 
      setToastDisplayed(true); 
      errorToast('Error deleteing news!');
      dispatch(resetState());
    }
  },[blockFulfill , blockRejected, dispatch, isLoading, toastDisplayed])

  function handleClick(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
    setIsLoading(true); 
    setToastDisplayed(false);  dataService.setApiKey(x_api!)
    dataService.setToken(data.token!)
    dispatch(DeleteNewsThunk(id!))
  }

  return (
    <button className={`bttn delete-btn ${isLoading ? 'loading' : ''}`} onClick={handleClick} disabled={isLoading}>
      {isLoading ? 'Deleting...' : 'Delete'}
    </button>
  )
}

export default DeleteButton
