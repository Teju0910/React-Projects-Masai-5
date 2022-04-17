import Restorent from ".../"



export const Filter = ({priceFilter}) =>{

  const  filterByInput =(e) =>{
        let input = e.target.value;
        // this.props.dispatch(filterByValue({value: input}))
     }

    return(
        <div className="control">
        <div className="select">
            <select onChange={
                 ( e ) => {
                    priceFilter()
                }
            }>
                <option value="" disabled selected>Sort by</option>
                <option>Price - Lowest to Highest</option>
                <option>Price - Highest to Lowest</option>
            </select>
        </div>
        
        <div className='control' style={{minWidth: "300px"}}>
            <input onChange={()=> {
                // filterByInput(e)
            }} style={{width: "100%"}} placeholder='Filter by' type='text'/>
                               </div>
    </div>
    )
}