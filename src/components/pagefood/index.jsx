import "./style.css";

export default function Food(props){

  console.log(props)

  return(
    <img src={props.image} alt="" />
  )

}