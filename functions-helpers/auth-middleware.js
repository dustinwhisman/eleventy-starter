import { checkAuth } from './check-auth';

export const authMiddleware = (config) => {
  return {
    before: async (handler, next) => {
      try {
        const user = await checkAuth(handler.event);
        handler.event.user = user;
        return next();
      } catch (error) {
        return handler.callback(null, {
          statusCode: 401,
          body: JSON.stringify({
            error: error.message,
          }),
        });
      }
    },
  };
};
