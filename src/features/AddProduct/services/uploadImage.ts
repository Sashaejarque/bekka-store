import axios from "axios";


export const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'products');
    
    /* const res = await fetch(
        'https://api.cloudinary.com/v1_1/dxqzqjv3l/image/upload',
        {
        method: 'POST',
        body: formData,
        }
    ); */
    const { data } = await axios.post('https://api.cloudinary.com/v1_1/dc2jojxg9/image/upload', formData);
        const { secure_url } = data;

    
    return secure_url;
};