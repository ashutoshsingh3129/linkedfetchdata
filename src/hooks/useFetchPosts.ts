import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.post(
          'https://linkedin-api8.p.rapidapi.com/search-posts',
          {
            // keyword: 'microsoft',
            sortBy: 'date_posted',
            datePosted: '',
            page: 1,
            contentType: '',
            // fromMember: [
            //   'ACoAAAEkwwAB9KEc2TrQgOLEQ-vzRyZeCDyc6DQ',
            //   'ACoAAANuWM8BtmA18VYdgqPtIWt6GhBCTDXToV4',
            //   'ACoAAA8BYqEBCGLg_vT_ca6mMEqkpp9nVffJ3hc',
            // ],
            // fromCompany: [1441, 1035],
            // mentionsMember: [
            //   'ACoAAAEkwwAB9KEc2TrQgOLEQ-vzRyZeCDyc6DQ',
            //   'ACoAAA8BYqEBCGLg_vT_ca6mMEqkpp9nVffJ3hc',
            // ],
            // mentionsOrganization: [1441, 1035],
            // authorIndustry: [96, 4],
            // authorCompany: [1035],
            // authorTitle: '',
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-rapidapi-host': 'linkedin-api8.p.rapidapi.com',
              'x-rapidapi-key': '4457cb9080msh581490d11664220p1f1341jsn5a6257cb584a',
            },
          }
        );

        // ✅ Adapt this if response format differs
        setPosts(response.data.data.items || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


  return { posts, loading };
}
