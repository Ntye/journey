import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://192.168.43.4:8081/api',
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export const verifytoken = ({setIsAuthenticated, router,setIsLoading}) => {
	const token = localStorage.getItem('token');
	if (token) {
		console.log(token)
		axiosInstance.get('/v1/auth/verify-token')
		.then(response => {
			if (response.status === 200) {
				setIsAuthenticated({
					auth: true,
					token: token
				});
				console.log(token)
				router.push('/');
				setIsLoading(false)
				console.log(token)
			}else {
				console.log('errorrrrr',response)
				setIsAuthenticated(false);
				localStorage.removeItem('token');
				setIsLoading(false)
				// Supprimer le token invalide du localStorage
			}
		})
		.catch(error => {
			console.error(error);
			localStorage.removeItem('token');
			setIsLoading(false)
		});

	} else {
		setIsAuthenticated(false);
		setIsLoading(false);
	}
}

export default axiosInstance;