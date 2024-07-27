function Form( {close}){
    
    return <div className="bg-black bg-opacity-50 h-screen absolute w-full top-0">
 
    <div className="flex justify-center pt-10">
        <form className="bg-white   p-3 w-[400px] mt-20 h-[400px] ">
        <i onClick={close} class="fa-solid fa-x text-3xl"></i>
        <br />
        <input className="w-[350px] my-3  border-2 border-black h-40px" type="text" placeholder="Enter Title" />
        <br />
        <textarea className="border-2 border-black" rows={8} cols={46} />
        <br />
        <button className="  px-[150px] my-5 py-2 bg-black  text-white  text-3xl rounded">save</button>
        </form>
    </div>
    </div>
}
export default Form