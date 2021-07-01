import { useEffect, useState } from "react"
import { fetchUser } from '../../services/user';

export const useUserProfile = (id) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch user axios
        fetchUser(id)
            .then((res) => {
                setUser(res);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [id]);

    return { loading, user };
}

