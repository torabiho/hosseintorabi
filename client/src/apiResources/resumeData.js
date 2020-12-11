import axios from 'axios';
export const getResumeData = async () => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/api`);
        return result.data;
    } catch (err) {
        return Promise.reject(err);
    }
}