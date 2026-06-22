import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const { PORT
     ,NODE_ENV,
      DATABASE_URI,
      JWT_SECRET,
      JWT_EXPIRES_IN,
      ARCJET_KEY,
      EMAIL_USER,
      EMAIL_PASSWORD
    } = process.env;
    
export { PORT ,
    NODE_ENV, 
    DATABASE_URI,
    JWT_SECRET ,
      JWT_EXPIRES_IN,
    ARCJET_KEY,
    EMAIL_USER,
    EMAIL_PASSWORD 
    };