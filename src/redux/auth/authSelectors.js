import { useSelector } from "react-redux";

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user;
export const getIsRefreshing = state => state.auth.isRefreshing;

export default function useAuth(){
    const user = useSelector(getUserName);
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefreshing = useSelector(getIsRefreshing);
    return {
        user,
        isLoggedIn,
        isRefreshing,
    };
}