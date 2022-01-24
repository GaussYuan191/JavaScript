export default (cb)=>{
    return ()=>{
        cb()
    }
}