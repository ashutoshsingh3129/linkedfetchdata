import React from "react";

type Video = {
  url: string;
  poster: string;
  duration: number;
};

type Author = {
  fullName: string;
  headline: string;
  username: string;
  url: string;
  profilePictures: { url: string; width: number; height: number }[];
};

type Reactions = {
  numComments: number;
  likeCount: number;
  appreciationCount: number;
  empathyCount: number;
  InterestCount: number;
  praiseCount: number;
  funnyCount: number;
  maybeCount: number;
  totalReactionCount: number;
};

type ResharedPost = {
  text: string;
  video?: Video[];
  company?: { name: string; url: string };
};

type Post = {
  id?: string;
  text: string;
  video?: Video[];
  author: Author;
  resharedPost?: ResharedPost;
  socialActivityCountsInsight: Reactions;
};

const formatDuration = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const PostCard = ({ post }: { post: Post }) => {
  const {
    text,
    video,
    resharedPost,
    author,
    socialActivityCountsInsight: reactions
  } = post;

  const profilePic =
    author?.profilePictures?.slice(-1)[0]?.url ||
    "https://via.placeholder.com/150";

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border hover:shadow-lg transition duration-200">
      {/* Author Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={profilePic}
          alt={author.fullName}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <a
            href={author.url}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold hover:underline"
          >
            {author.fullName}
          </a>
          <p className="text-sm text-gray-500">{author.headline}</p>
        </div>
      </div>

      {/* Post Text */}
      <p className="text-gray-800 mb-4 whitespace-pre-wrap">{text}</p>

      {/* Post Video */}
      {video?.length || 0 > 0 && (
        <div className="mb-4">
          <video
            src={video && video[0].url}
            poster={video && video[0].poster}
            controls
            className="w-full rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-1">
            Duration: {formatDuration(video && video[0].duration || 0)}
          </p>
        </div>
      )}

      {/* Repost Section */}
      {resharedPost && (
        <div className="mt-4 border-l-4 border-blue-400 pl-4 bg-gray-50 p-3 rounded-md">
          <p className="text-gray-700 font-medium mb-2">🔁 Reshared Post:</p>
          <p className="text-gray-600">{resharedPost.text}</p>

          {resharedPost?.video?.[0] && (
            <video
              src={resharedPost.video[0].url}
              poster={resharedPost.video[0].poster}
              controls
              className="w-full mt-2 rounded"
            />
          )}

          {resharedPost?.company && (
            <a
              href={resharedPost.company.url}
              target="_blank"
              rel="noreferrer"
              className="block mt-2 text-blue-600 hover:underline text-sm"
            >
              🔗 {resharedPost.company.name}
            </a>
          )}
        </div>
      )}

      {/* Reactions */}
      <div className="mt-4 text-sm text-gray-700">
        <div className="font-semibold text-gray-900 mb-1">
          Total Reactions: {reactions.totalReactionCount}
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs">
          <li>👍 Likes: {reactions.likeCount}</li>
          <li>💡 Appreciation: {reactions.appreciationCount}</li>
          <li>💙 Empathy: {reactions.empathyCount}</li>
          <li>⭐ Interest: {reactions.InterestCount}</li>
          <li>👏 Praise: {reactions.praiseCount}</li>
          <li>😂 Funny: {reactions.funnyCount}</li>
          <li>🤔 Maybe: {reactions.maybeCount}</li>
          <li>💬 Comments: {reactions.numComments}</li>
        </ul>
      </div>
    </div>
  );
};

export default PostCard;
