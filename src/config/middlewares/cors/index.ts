import { CorsOptions } from 'cors';
import { FRONTEND_URL } from '../../../constrants/envs';

const corsOptions: CorsOptions = {
  origin: [FRONTEND_URL],
};

export default corsOptions;
