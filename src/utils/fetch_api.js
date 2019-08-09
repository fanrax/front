
function myFetch (url,body) {
  return fetch("http://127.0.0.1:2333/"+url,body)
  .then((res)=>{
    return res.json()
  }).then((res)=>{
    return res
  }).catch((err)=>{
    return err
  })
}
module.exports = myFetch