
export default function HeadChange({iname}){
  
  
    return(
        <>
         {iname.map((item, index)=>
         <div key={index} className={item.img?'about':'aboutnone'}>
            <div>{item.img&&<img className='aboutimg' src={item.img} alt="img" />}</div>
            <span className="txtAb">{item.text}</span>
            </div>)}
        </>
    )

}