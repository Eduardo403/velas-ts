import { NextApiRequest, NextApiResponse } from "next"


const ping = (req:NextApiRequest,res:NextApiResponse) => {

  const {method}= req
 switch (method) {
  case "GET":
    res.status(200).json({messnge:"get"});
    break;
    case "POST":
      res.status(200).json({messnge:"post"});
      break;
 
  default:
    break;
 }
}

export default ping