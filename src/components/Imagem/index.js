import { json } from "react-router-dom"




const Index = (props) => {
    const { src, w, h, flex } = props

  const data = src?.default || src

    return (
       


                <img src={data}
               
                   alt="" style={ w && {  width: w,  height: h , fill: 'red'} }   height={h} width={w} />
                    

            


    )
}

export default Index