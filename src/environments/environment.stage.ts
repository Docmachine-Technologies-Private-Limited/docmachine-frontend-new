export const AppConfig = {
  production: false,
  environment: 'Staging',
  BASE_URL: 'https://stageapi.bharathexim.com/v1',
  COUPON_API:"https://forexappapi.bharathexim.com/v1",
  SOCKET_ENDPONT: 'https://stageapi.bharathexim.com',
  ROLE_URL: 'https://role.bharathexim.com',
  FRONT_END_URL:'https://staging.bharathexim.com/',
  S3_BUCKET_URL:'https://staging.bharathexim.com/',
  TALLY_API:"http://192.168.29.126:8083/",
  ROLE_DELTA_TRADE_APP_API:"http://localhost:4201",
  appVersion: require('../../package.json').version,
};
