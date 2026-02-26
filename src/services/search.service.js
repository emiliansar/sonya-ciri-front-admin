import axios from "axios";

axios.defaults.withCredentials = true;

class SearchService {
    async refresh(refresh) {
        console.log("Refresh получил refresh: " + JSON.stringify(refresh))
        try {
            console.log("Refresh запрос начался")
            const {data} = await axios.post('/api/auth/refresh', {}, {
                headers: {
                    'Authorization': `Bearer ${refresh}`
                }
            });
            return data;
        } catch (error) {
            throw error;
        }
    }

    async search(
        access_token,
        refresh_token,
        changeAccessToken,
        text
    ) {
        console.log("Вызван поиск: ", text)
        try {
            const { data } = await axios.get(`/api/search?text=${text}`, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            });
            return data;
        } catch (error) {
            console.log("Error.status: " + error.response?.status)
            if (+error.response?.status === 401) {
                console.log("Обновление токена...")

                try {
                    const newToken = await this.refresh(refresh_token);

                    changeAccessToken(newToken.access_token);
                    console.log("Новый access токен: " + newToken.access_token)

                    const { data } = await axios.get(`/api/search?text=${text}`, {
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    });
                    console.log("Повторный запрос успешен: ", data)
                    return data;
                } catch (refreshError) {
                    console.error("Не удалось обновить токен: ", refreshError)
                    throw new Error("Сессия истекла. Пожалуйста войдите снова.");
                }
            }
            throw error;
        }
    }
}

export const searchService = new SearchService();