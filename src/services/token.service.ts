class TokenService {
    static ACCESS_TOKEN = 'access_token';
    static REFRESH_TOKEN = 'refresh_token';


    getAccessToken(): string | null {
        return localStorage.getItem(TokenService.ACCESS_TOKEN);
    }

    updateAccessToken(accessToken: string): void {
        localStorage.setItem(TokenService.ACCESS_TOKEN, accessToken);
    }

    removeAccessToken(): void {
        localStorage.removeItem(TokenService.ACCESS_TOKEN);
    }

    getRefreshToken(): string | null {
        return localStorage.getItem(TokenService.REFRESH_TOKEN);
    }

    updateRefreshToken(refreshToken: string): void {
        localStorage.setItem(TokenService.REFRESH_TOKEN, refreshToken);
    }

    removeRefreshToken(): void {
        localStorage.removeItem(TokenService.REFRESH_TOKEN);
    }

}

export default new TokenService();