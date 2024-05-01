import React, { useEffect, useRef } from 'react'
import Navbar from '../../components/navbar/Navbar'
import TableTop from '../../components/tabletop/Tabletop'
import DeleteButton from '../../components/news/newsaction/DeleteButton/DeleteButton'
import '../../style/main.css'
import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/store'
import { useAppDispatch } from '../../utils/redux.utils'
import { GetAllNewsData } from '../../redux/actions/news/NewsData.actions'
import { dataService } from '../../utils/axios'
import { isExpired } from '../../utils/helper'
import { NewsInterface } from '../../redux/slices/interface/news.interface'
import { S3_URL } from '../../constants/constants'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

export const NewsList :React.FC = () => {
  const dispatch = useAppDispatch()
  const didMount = useRef<boolean>(false)
  const  { x_api } = useSelector((state : RootStore) => state.x_api_key)

  useEffect(() =>{
    if(!didMount.current){
      didMount.current = true
      dataService.setApiKey(x_api!)
      if(!NewsData || isExpired(expiry) || NewsData.length == 0) dispatch(GetAllNewsData());
    }
  },[dispatch])

  // extract data from redux
  const { all_news_data } = useSelector((state :RootStore) => state.news)
  console.log(all_news_data)
  const { data : NewsData , expiry , isFulfilled , isPending , isRejected } = all_news_data
  console.log(NewsData)

  return (
    <div className='frame-container'>
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name='News' showBars />
        </div>
        <TableTop />
          <div className='flex flex-col gap-8 w-full'>
            {
              NewsData &&  NewsData.length > 0 &&  NewsData.map((newss : NewsInterface , index) : React.ReactNode => {
                return (
                  <div className='flex items-end gap-8 shadow-lg mx-auto w-[90%] justify-between pr-4' key={index}>
                    <div className='flex gap-4 w-[85%]'>
                      <img src={newss.image ? S3_URL + newss.image : '/news.jpeg'} alt="news" className='rounded-xl  h-[18rem] aspect-[4/3]' />
                      <div className='py-4'>
                        <h3 className='text-[14px] md:text-[18px] font-bold'>{newss.title}</h3>
                        <p className='text-[14px] md:text-[16px] line-clamp-4' dangerouslySetInnerHTML={{__html: newss.description}}></p>
                        <p className='text-[12px] text-slate-600 mt-4' >{newss.inserted.split('T').at(0)}</p>
                      </div>
                    </div>
                    <div className='py-4'>
                      <DeleteButton id={newss.id} />
                      <Link to={`/news/edit/${newss.id}`} className=' bttn edit-btn'>Edit</Link>
                    </div>
                  </div>
                )
              })
            }
            {
              isPending && !isRejected && !isFulfilled && <Loading />
            }
          </div>
      </div>
    </div>
  )
}
