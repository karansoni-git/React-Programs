function Data(){
    //here we have created an array. 
    let dataList = ["C","C++","JAVA","PYTHON","JAVASCRIPT"];

    //when we want to use javascript code we write between {} braces.
    //map method iterate through all elements inside an array.

    //each child in a list must have unique key
    return <ul className="list-group">
    {dataList.map((item)=>(<li key={item} className="list-group-item">{item}</li>))}    
  </ul>
}
export default Data;