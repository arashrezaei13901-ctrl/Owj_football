export type NewsCategory = 'team' | 'transfers' | 'academy' | 'interview' | 'training' | 'match_report';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: NewsCategory;
  categoryLabel: string;
  images: string[];
  videoUrl?: string;
  author: string;
  publishedAt: string;
  isPinned: boolean;
  isFeatured: boolean;
  isBreaking: boolean;
  isScheduled?: boolean;
  scheduledFor?: string;
  viewsCount: number;
  likesCount: number;
  tags: string[];
}

export interface PhotoAlbum {
  id: string;
  title: string;
  coverImage: string;
  category: string;
  date: string;
  photosCount: number;
}

export interface PhotoItem {
  id: string;
  albumId: string;
  title: string;
  url: string;
  caption?: string;
  uploadedAt: string;
  views: number;
  likes: number;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  category: string;
  uploadedAt: string;
  viewsCount: number;
  isFeatured: boolean;
  fileSizeMb?: number;
}

export interface PlayerStats {
  matches: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  cleanSheets?: number;
  minutesPlayed: number;
}

export interface Player {
  id: string;
  firstNameEn: string;
  lastNameEn: string;
  fullNameFa: string;
  username: string;
  playerId: string; // e.g. "OWJ-10"
  pinCode: string;   // 4-digit or custom PIN
  jerseyNumber: number;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  positionFa: string;
  photoUrl: string;
  age: number;
  heightCm: number;
  weightKg: number;
  preferredFoot: 'راست' | 'چپ' | 'دوپا';
  isActive: boolean;
  stats: PlayerStats;
  attendanceStatus: 'present' | 'absent' | 'injured' | 'excused';
  matchSquadStatus: 'starting' | 'bench' | 'not_selected';
}

export interface MatchScorer {
  player: string;
  minute: number;
  team: 'home' | 'away';
}

export interface MatchItem {
  id: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  venue: string;
  status: 'upcoming' | 'live' | 'finished';
  homeScore?: number;
  awayScore?: number;
  liveMinute?: string;
  scorers?: MatchScorer[];
  summary?: string;
}

export interface TeamStanding {
  rank: number;
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  isOwj: boolean;
}

export interface PushNotification {
  id: string;
  title: string;
  message: string;
  category: 'breaking' | 'match' | 'training' | 'media' | 'announcement';
  priority: 'urgent' | 'normal';
  createdAt: string;
  isRead: boolean;
  linkTab?: 'news' | 'matches' | 'media' | 'players';
}

export interface ClubInfo {
  name: string;
  fullName: string;
  currentSeason?: string;
  foundedYear: number;
  stadium: string;
  headCoach: string;
  president: string;
  motto: string;
  officialColors: string;
  bio: string;
  phone: string;
  email: string;
  address: string;
}

export type AppTab = 'home' | 'news' | 'media' | 'matches' | 'players' | 'admin';
