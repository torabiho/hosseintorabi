import axios from "axios";
export const getResumeData = async () => {
	try {
		const result = await axios.get(`/api`);
		return result.data;
	} catch (err) {
		return Promise.reject(err);
	}
};

export const sendEmail = async (data) => {
	try {
		const result = await axios.post("/api/send-email", data);
		if (result.status !== 200) throw "Message was not sent";
	} catch (error) {
		return Promise.reject(error);
	}
};
