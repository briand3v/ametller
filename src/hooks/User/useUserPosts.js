import { useEffect, useState } from "react"
import { fetchUserPosts } from '../../services/user';

export const useUserPosts = (id, limit) => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch user axios
        fetchUserPosts(id, limit)
            .then((res) => {
                setPosts(res);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [id, limit]);

    return { loading, posts };
}

