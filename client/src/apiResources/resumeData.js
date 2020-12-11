import axios from 'axios';
export const getResumeData = async () => {
    try {
        const result = await axios.get(`/api`);
        return result.data;
    } catch (err) {
        return Promise.reject(err);
    }
}