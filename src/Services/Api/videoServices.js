import * as Req from '../../utils/request';
export const getVideo = async ({type ='for-you', page = 1}) => {
    try{
       const res = await Req.get('/videos',{
        params : {
            type,
            page
        }
       })
       return res.data;
    }
    catch(err){
        console.log(err);
    }
}
