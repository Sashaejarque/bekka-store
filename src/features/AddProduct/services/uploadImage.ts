import axios from "axios";


export const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append('image', image);
    
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/uploads`, formData);
    const { secure_url, public_id } = data;
    
    return { secure_url, public_id };
};