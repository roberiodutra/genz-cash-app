import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Swagger Genz Cash - API',
    version: '1.0.0',
    description: 'Documentation for Genz-Cash api',
    contact: { email: 'dev.roberio@gmail.com' }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: {
    bearerAuth: []
  },
  host: 'localhost:3001',
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: ['./src/docs/**/*.yaml'],
};

const swaggerServer = [swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(options))];

export default swaggerServer;
