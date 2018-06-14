import swaggerJSDoc from 'swagger-jsdoc';

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Lazy Developers API',
    version: '1.0.0',
    description: '**Lazy Developers API Documentation**. This is documented using the OpenAPI format',
  },
  host: process.env.DOMAIN,
  basePath: '/',
};

// options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['lib/api/*/*.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export const getSpec = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
};
