import { navigate } from "gatsby"

const IndexPage = () => {
  if (typeof window !== `undefined`) {
    navigate("/blog/");
  } 
  return(
    null
  )
  }

export default IndexPage