export interface NewsSliceInitialState{
  all_news_data : {
    data : null | NewsInterface[]
    isPending : boolean,
    isRejected : boolean,
    isFulfilled : boolean 
    expiry : null | string
  }
}

export interface IndividualNewsSliceInitialState{
  news_by_id : {
    data : null | NewsInterface
    isPending : boolean,
    isRejected : boolean,
    isFulfilled : boolean 
  }
}

export interface NewsInterface{
  id : string,
  organizationID : string
  title : string
  description : string
  image : string
  inserted : string
  updated : string
}

export interface initialNewsResponseInterface{
  success : boolean
  message : string 
  data : NewsInterface[]
}

// get news by id

export interface individualNewsResponse  {
  success : boolean
  message : string 
  data : NewsInterface
}