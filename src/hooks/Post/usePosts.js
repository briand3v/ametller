import { useEffect, useState } from "react"
import { fetchPosts } from '../../services/posts';

export const usePosts = (limit) => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch posts axios
        fetchPosts(limit)
            .then((res) => {
                setPosts(res);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [limit]);

    return {loading, posts};
}

