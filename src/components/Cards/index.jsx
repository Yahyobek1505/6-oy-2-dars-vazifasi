import  './index.css';

function Card(props) {
  const {image, title, start_production, clas} = props
   return (
       <div className='main'>
        <h1 className='headTitle'>Welcome to our AutoGallery </h1>
        <div className='card-wrapper'>
        <div className="card">
        <img src={image} alt="" />
        <h1 className='cardTitle'>{title}</h1>
        <p className='date'> ishlab chiqarilgan sana: {start_production}</p>
        <p className='holati'>{clas }</p>
    </div>
        </div>
    </div>

   )  
}
export default Card;
