import supabase from "../config/db";

function fetchImage(bucket,path_image){
    const {data , error} = supabase.storage.from(bucket)
                                .getPublicUrl(path_image)
    return data.publicUrl
}

export default fetchImage;