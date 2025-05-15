import { useMemo, useState } from "react";
import useFetchPosts from "./hooks/useFetchPosts";
import PostCard from "./components/PostCard";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import { applyFilters } from "./utils/filterUtils.ts";

const App = () => {
  const { posts, loading } = useFetchPosts();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    onlyOriginal: false,
    onlyReshared: false,
    onlyWithVideo: false
  });

  // Filter posts based on search and filters
  const filteredPosts = useMemo(() => {
    if (!posts || posts.length === 0) return [];
    return applyFilters(posts, filters, searchQuery);
  }, [posts, filters, searchQuery]);

  // Top 3 engaging posts by reaction count
  const topPosts = useMemo(() => {
    if (!filteredPosts || filteredPosts.length === 0) return [];
    return [...filteredPosts]
      .sort(
        (a, b) =>
          b.socialActivityCountsInsight?.totalReactionCount -
          a.socialActivityCountsInsight?.totalReactionCount
      )
      .slice(0, 3);
  }, [filteredPosts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">LinkedIn Posts Dashboard</h1>

      <div className="mb-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <Filters filters={filters} setFilters={setFilters} />
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Top 3 Engaging Posts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {topPosts.map(post => (
            <div key={post.urn}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {/* All Filtered Posts */}
      <div>
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">
          All Posts {filteredPosts.length > 0 && `(${filteredPosts.length})`}
        </h2>
        {filteredPosts.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No posts match your search criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredPosts.map(post => (
              <div key={post.urn}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
