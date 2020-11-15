import 'dotenv/config';
import App from '@/config/app';

const { PORT } = process.env;

App.listen(PORT || 3000);
