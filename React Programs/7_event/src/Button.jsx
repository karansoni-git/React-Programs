//getting clickfunction2 from App.js as a props an use in onClick event.
function Button({clickfunction2})
{
    return <button className="btn" onClick={clickfunction2}>Click Me</button>
}

export default Button;