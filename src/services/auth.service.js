

export class AuthService {
    /**
     * Log the user in
     * @param {string} username 
     * @param {string} password 
     */
    async login(username, password) {
        await new Promise(resolve => {
            setTimeout(resolve, 2000);
        });
        return this.getUser();
    }
    async getUser(){
        return {
            id: "4oiur093j",
            firstName: "Afnan",
            lastName: "Yousef"
        }
    }
}

export const authService = new AuthService();