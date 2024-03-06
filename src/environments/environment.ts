export const AppConfig = {
  production: false,
  environment: 'LOCAL',
  BASE_URL: 'http://localhost:8081/v1',
  ROLE_URL:'http://localhost:4201',
  FRONT_END_URL:'http://localhost:4200/',
  S3_BUCKET_URL:'http://localhost:4200/',
  TALLY_API:"http://localhost:8083/v1",
  COUPON_API:"http://localhost:8082/v1",
  ROLE_DELTA_TRADE_APP_API:"http://localhost:4201",
  appVersion: require('../../package.json').version,
};
