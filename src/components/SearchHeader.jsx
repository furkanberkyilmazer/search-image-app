import { useState } from "react";


function SearchHeader({search}) {

    const [inputValue, SetInputValue] = useState("")

    const handleFormSubmit=(event)=> {
        event.preventDefault();  //Normalde form submit olduğunda sayfa yeniden yüklenir onu kapattık.
        search(inputValue);
    }
    const handleChange=(event)=>{
        SetInputValue(event.target.value);
    }

    return ( 
         <div className="searchDiv">
            <form onSubmit={handleFormSubmit}>
                <label>Ne Arıyorsunuz?</label>
                <input value={inputValue} onChange={handleChange}/>
            </form>

         </div>

     );
}

export default SearchHeader;