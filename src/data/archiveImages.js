const archiveImages = [
  // Posters
  { id: 'tanger-poster', title: 'Tanger Poster', category: 'Poster', src: new URL('../../Archive/Tanger-Poster.JPEG', import.meta.url).href },
  { id: 'tanger-new', title: 'Tanger Visuel', category: 'Poster', src: new URL('../../Archive/tanger-new.JPEG', import.meta.url).href },
  { id: 'roul-final', title: 'ROUL Final', category: 'Poster', src: new URL('../../Archive/ROUL-final.JPEG', import.meta.url).href },
  { id: 'marrakech-run', title: 'Marrakech Run', category: 'Poster', src: new URL('../../Archive/Marrakech-Run-Poster.JPEG', import.meta.url).href },
  { id: 'poster-176478088', title: 'Poster Design', category: 'Poster', src: new URL('../../Archive/1764780882836.JPEG', import.meta.url).href },
  { id: 'poster-176478091', title: 'Poster Design 2', category: 'Poster', src: new URL('../../Archive/1764780915961.JPEG', import.meta.url).href },
  { id: 'poster-176478086', title: 'Poster Design 3', category: 'Poster', src: new URL('../../Archive/1764780862857.JPEG', import.meta.url).href },
  { id: 'poster-175069919', title: 'Poster Design 4', category: 'Poster', src: new URL('../../Archive/1750699197584.JPEG', import.meta.url).href },
  
  // Sport
  { id: 'ktm-rider', title: 'KTM Rider', category: 'Sport', src: new URL('../../Archive/ktm.JPEG', import.meta.url).href },
  { id: 'ktm-rider-2', title: 'KTM Rider 2', category: 'Sport', src: new URL('../../Archive/ktm2.JPEG', import.meta.url).href },
  
  // Banners
  { id: 'banner-970', title: 'Bannière 970x250', category: 'Banner', src: new URL('../../Archive/banier-970-x-250.JPEG', import.meta.url).href },
  { id: 'banner-970-alt', title: 'Bannière 970x250 v2', category: 'Banner', src: new URL('../../Archive/970x250.JPEG', import.meta.url).href },
  { id: 'banner-970-alt2', title: 'Bannière 970x250 v3', category: 'Banner', src: new URL('../../Archive/banier-970-x-250 2.JPEG', import.meta.url).href },
  
  // Social Media
  { id: 'insta', title: 'Instagram Visuel', category: 'Social Media', src: new URL('../../Archive/Insta.JPEG', import.meta.url).href },
  { id: 'fb-176744853', title: 'Facebook Post', category: 'Social Media', src: new URL('../../Archive/FB_IMG_1767448534423.JPEG', import.meta.url).href },
  { id: 'fb-176744835', title: 'Facebook Post 2', category: 'Social Media', src: new URL('../../Archive/FB_IMG_1767448351408.JPEG', import.meta.url).href },
  { id: 'fb-176744833', title: 'Facebook Post 3', category: 'Social Media', src: new URL('../../Archive/FB_IMG_1767448339284.JPEG', import.meta.url).href },
  { id: 'fb-176744799', title: 'Facebook Post 4', category: 'Social Media', src: new URL('../../Archive/FB_IMG_1767447995998.JPEG', import.meta.url).href },
  { id: 'fb-176744795', title: 'Facebook Post 5', category: 'Social Media', src: new URL('../../Archive/FB_IMG_1767447956652.JPEG', import.meta.url).href },
  { id: 'fb-176744795-alt', title: 'Facebook Post 6', category: 'Social Media', src: new URL('../../Archive/FB_IMG_1767447951960.JPEG', import.meta.url).href },
  { id: 'fb-176744518', title: 'Facebook Post 7', category: 'Social Media', src: new URL('../../Archive/FB_IMG_1767445185772.JPEG', import.meta.url).href },
  { id: 'fb-176744191', title: 'Facebook Post 8', category: 'Social Media', src: new URL('../../Archive/FB_IMG_1767441914558.JPEG', import.meta.url).href },
  
  // Illustration
  { id: 'flag', title: 'Flag Illustration', category: 'Illustration', src: new URL('../../Archive/flag.JPEG', import.meta.url).href },
  { id: 'img-16', title: 'Illustration 16', category: 'Illustration', src: new URL('../../Archive/16.JPEG', import.meta.url).href },
  
  // Event
  { id: 'event-176478087', title: 'Event Design', category: 'Event', src: new URL('../../Archive/1764780878845.JPEG', import.meta.url).href },
  { id: 'event-176478088', title: 'Event Design 2', category: 'Event', src: new URL('../../Archive/1764780887740.JPEG', import.meta.url).href },
  { id: 'event-176478086', title: 'Event Design 3', category: 'Event', src: new URL('../../Archive/1764780867830.JPEG', import.meta.url).href },
  
  // Design Projects
  { id: 'design-20250510', title: 'Design Project', category: 'Design', src: new URL('../../Archive/IMG-20250510-WA0000.JPEG', import.meta.url).href },
  { id: 'design-20250506-1', title: 'Design Project 2', category: 'Design', src: new URL('../../Archive/IMG-20250506-WA0003.JPEG', import.meta.url).href },
  { id: 'design-20250506-2', title: 'Design Project 3', category: 'Design', src: new URL('../../Archive/IMG-20250506-WA0002.JPEG', import.meta.url).href },
  { id: 'design-20250411', title: 'Design Project 4', category: 'Design', src: new URL('../../Archive/IMG-20250411-WA0023.JPEG', import.meta.url).href },
  { id: 'design-20250406', title: 'Design Project 5', category: 'Design', src: new URL('../../Archive/IMG-20250406-WA0003.JPEG', import.meta.url).href },
  { id: 'design-20240626', title: 'Design Project 6', category: 'Design', src: new URL('../../Archive/IMG-20240626-WA0003.JPEG', import.meta.url).href },
  { id: 'design-20240426', title: 'Design Project 7', category: 'Design', src: new URL('../../Archive/IMG-20240426-WA0013.JPEG', import.meta.url).href },
  { id: 'design-20230626', title: 'Design Project 8', category: 'Design', src: new URL('../../Archive/IMG-20230626-WA0010.JPEG', import.meta.url).href },
  
  // Other Projects
  { id: 'project-20241220-1', title: 'Project 2024', category: 'Design', src: new URL('../../Archive/jpg2024-12-20 232015x.JPEG', import.meta.url).href },
  { id: 'project-20241220-2', title: 'Project 2024 v2', category: 'Design', src: new URL('../../Archive/jpg2024-12-20 231848.JPEG', import.meta.url).href },
  { id: 'project-20241220-3', title: 'Project 2024 v3', category: 'Design', src: new URL('../../Archive/jpg 2024-12-20 231819.JPEG', import.meta.url).href },
  { id: 'project-20241220-4', title: 'Project 2024 v4', category: 'Design', src: new URL('../../Archive/jpg 2024-12-20 231713.JPEG', import.meta.url).href },
  { id: 'project-20241220-png', title: 'Project PNG', category: 'Design', src: new URL('../../Archive/jpg 2024-12-20.PNG', import.meta.url).href },
  { id: 'project-20241220-png2', title: 'Project PNG 2', category: 'Design', src: new URL('../../Archive/jpg 2024-12-20 2.PNG', import.meta.url).href },
  { id: 'project-176478085', title: 'Project Design', category: 'Design', src: new URL('../../Archive/1764780858361.JPEG', import.meta.url).href },
];

export default archiveImages;
