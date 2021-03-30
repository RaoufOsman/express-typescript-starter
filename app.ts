// this shim is required
import { createExpressServer } from "routing-controllers";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  defaults: {
    //with this option, null will return 404 by default
    nullResultCode: 404,

    //with this option, void or Promise<void> will return 204 by default
    undefinedResultCode: 204,

    paramOptions: {
      //with this option, argument will be required by default
      required: true,
    },
  },
  cors: true,
  classTransformer: true,
  controllers: [__dirname + "/controllers/*.js"], // we specify controllers we want to use
  middlewares: [__dirname + "/middlewares/**/*.js"],
  interceptors: [__dirname + "/interceptors/**/*.js"],
});

// run express application on port 3000
app.listen(3000);
