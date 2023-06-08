import { JWT_TOKEN } from "../contants";
import userDatabase from "../users.json";
interface LoginProps {
    username: string;
    password: string;
}
export const login: ({
    password,
    username,
}: LoginProps) => Promise<string> = async ({
    password,
    username,
}: LoginProps) => {
        return new Promise((resolve, reject) => {
            const userData = userDatabase.users.find(
                (user) => user.username === username
            );
            if (userData?.username === username && userData.password === password) {
                const token = `dummy.token.${username}${password}`;

                resolve(token);
            } else {
                reject("Invalid Credentials");
            }
        });
    };

export const saveToken = (token: string, navigate: () => void) => {
    localStorage.setItem(JWT_TOKEN, token);
    navigate();
};
export const logout = () => {
    localStorage.removeItem(JWT_TOKEN);
};
export const isAuthenticated = () => {
    const token = localStorage.getItem(JWT_TOKEN); // if present returns token else null

    return token !== null;
};
