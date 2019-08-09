
function myFetch (url,body) {
  return fetch("http://39.105.160.149/"+url,body)
  .then((res)=>{
    return res.json()
  }).then((res)=>{
    return res
  }).catch((err)=>{
    return err
  })
}
module.exports = myFetch