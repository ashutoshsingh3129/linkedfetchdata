interface ProfilePicture {
  width: number;
  height: number;
  url: string;
}

interface Author {
  fullName: string;
  headline: string;
  username: string;
  url: string;
  profilePictures: ProfilePicture[];
  type: string;
}

interface ResharedAuthor {
  firstName?: string;
  lastName?: string;
  username: string;
  url: string;
}

interface VideoItem {
  url: string;
  poster?: string;
  duration?: number;
}

interface ImageItem {
  url: string;
  width: number;
  height: number;
}

interface SocialActivityCounts {
  numComments: number;
  likeCount: number;
  appreciationCount: number;
  empathyCount: number;
  InterestCount: number;
  praiseCount: number;
  funnyCount: number;
  maybeCount: number;
  totalReactionCount: number;
}

interface ResharedPost {
  isBrandPartnership: boolean;
  text: string;
  author: ResharedAuthor;
  video?: VideoItem[];
  company?: {
    name?: string;
    url?: string;
    urn?: string;
  };
  document?: any;
  celebration?: any;
  poll?: any;
  article?: any;
  entity?: any;
}

interface LinkedInPost {
  urn: string;
  url: string;
  template: string;
  text: string;
  postedAt: string;
  postedDate: string;
  postedDateTimestamp: number;
  reposted: boolean;
  resharedPost?: ResharedPost;
  video?: {
    thumbnails: null;
    video: null;
  };
  image?: ImageItem[];
  entity: any;
  article: any;
  object: any;
  author: Author;
  socialActivityCountsInsight: SocialActivityCounts;
}