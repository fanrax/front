
function myFetch (url,body) {
  return fetch("http://39.105.160.149:2333/"+url,body)
  // return fetch("http://172.16.0.14:2333/"+url,body)
  .then((res)=>{
    return res.json()
  }).then((res)=>{
    return res
  }).catch((err)=>{
    return err
  })
}
module.exports = myFetch