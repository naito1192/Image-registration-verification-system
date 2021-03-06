  import axios from 'axios'

  async  function getimg(filename,imgurl){
       var url='/v3/?name='+filename;
       //送信処理
       await axios.get(
          //送信URL
          url,
          {
            headers:{
              'content-type':'image/jpeg'
            },responseType:'arraybuffer'

          //送信成功時処理
          }).then(response =>{
             
             const prefix = `data:${response.headers["content-type"]};base64,`;
             const base64 = new Buffer(response.data, "binary").toString("base64");
             
             imgurl[filename]=prefix+base64;
             
             
             return imgurl;

          //送信失敗時処理
          }).catch(e=>{
             alert(e);
        });
      }


  export { getimg }
