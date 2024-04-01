import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { IconBrandReactNative } from '@tabler/icons-react';
import { IconBrandPhp } from '@tabler/icons-react';
import HistoryIcon from '@mui/icons-material/History';

export const categories = [
  { name: 'Latest', icon: <HistoryIcon fontSize="small" />, },
  { name: 'Coding', icon: <CodeIcon fontSize="small" />, },
  { name: 'PHP', icon: <IconBrandPhp stroke={2} />, },
  { name: 'ReactJS', icon: <IconBrandReactNative stroke={2} />, },
  { name: 'Music', icon: <MusicNoteIcon fontSize="small" /> },
  { name: 'Education', icon: <SchoolIcon fontSize="small" />, },
  { name: 'Movie', icon: <OndemandVideoIcon fontSize="small" />, },
  { name: 'Gaming', icon: <SportsEsportsIcon fontSize="small" />, },
  { name: 'Live', icon: <LiveTvIcon fontSize="small" />, },
  { name: 'Sport', icon: <FitnessCenterIcon fontSize="small" />, },
  { name: 'Fashion', icon: <CheckroomIcon fontSize="small" />, },
  { name: 'Gym', icon: <FitnessCenterIcon fontSize="small" />, },
  { name: 'Crypto', icon: <DeveloperModeIcon fontSize="small" />, },
];