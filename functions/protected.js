import middy from 'middy';
import { authMiddleware } from '../functions-helpers/auth-middleware';

const protectedFunction = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: 'auth true',
    }),
  });
};

const handler = middy(protectedFunction).use(authMiddleware());

export { handler };
