import { NextApiRequest, NextApiResponse } from 'next'


const id = (req:NextApiRequest,res:NextApiResponse) => {
  res.status(200).json({ message:"some id"});
}

export default id