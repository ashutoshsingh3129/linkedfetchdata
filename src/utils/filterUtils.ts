export function applyFilters(posts: any[], filters: any, searchQuery: string) {
  return posts.filter(post => {
    const isOriginal = !post.reposted;
    const hasVideo = post.video && post.video.length > 0;
    const textMatch = post.text?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      post.author?.fullName?.toLowerCase().includes(searchQuery.toLowerCase());

    if (filters.onlyOriginal && !isOriginal) return false;
    if (filters.onlyReshared && isOriginal) return false;
    if (filters.onlyWithVideo && !hasVideo) return false;
    if (searchQuery && !textMatch) return false;

    return true;
  });
}
