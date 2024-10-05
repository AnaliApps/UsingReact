function Button({text,color,fontSize,link,handleClick}){
    const buttonStyle = {
        color:color,
        fontSize: fontSize +"px"
    };
    return <button onClick={()=>handleClick(link)} style={buttonStyle}>{text}</button>
}
Button.defaultProps = {
    text:"Click Me",
    color:"blue",
    fontSize:12
};

function ClickButton(){
    const handleButtonClick = (url) =>{
        window.location.href = url;
    };
    return (
        <div>
            <Button link="https://www.theodinproject.com" handleClick={handleButtonClick}/>
        </div>
    )
}

export default ClickButton;