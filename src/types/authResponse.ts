type UserRole = 'ROLE_USER' | 'ROLE_ADMIN';

export interface AuthResponse {
    user: {
        id: number,
        username: string,
        email: string,
        role: UserRole,
        // fix to string after backend change it
        imageLink: boolean
    },
    token: {
        accessToken: string,
        refreshToken: string,
        tokenType: string
    }
}