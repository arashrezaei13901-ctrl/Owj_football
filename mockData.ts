import { 
  NewsItem, 
  PhotoAlbum, 
  PhotoItem, 
  VideoItem, 
  Player, 
  MatchItem, 
  TeamStanding, 
  PushNotification, 
  ClubInfo 
} from '../types';

export const initialClubInfo: ClubInfo = {
  name: 'OWJ',
  fullName: 'تیم فوتبال OWJ',
  currentSeason: '۱۴۰۵_۱۴۰۶',
  foundedYear: 1403,
  stadium: 'استادیوم خانگی تیم OWJ',
  headCoach: '',
  president: '',
  motto: 'پرواز به سوی پیروزی و افتخار',
  officialColors: 'آبی پررنگ، سفید، مشکی',
  bio: 'پلتفرم و اپلیکیشن رسمی اطلاع‌رسانی، رسانه و هماهنگی بازیکنان و کادر فنی باشگاه فوتبال OWJ.',
  phone: '',
  email: 'info@owjfc.com',
  address: '',
};

// All items start completely clean and empty for the user to populate from the admin panel
export const initialNews: NewsItem[] = [];

export const initialAlbums: PhotoAlbum[] = [];

export const initialPhotos: PhotoItem[] = [];

export const initialVideos: VideoItem[] = [];

export const initialPlayers: Player[] = [];

export const initialMatches: MatchItem[] = [];

export const initialStandings: TeamStanding[] = [];

export const initialNotifications: PushNotification[] = [];
