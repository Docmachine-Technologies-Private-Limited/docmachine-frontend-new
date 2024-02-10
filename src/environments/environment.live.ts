export const AppConfig = {
  production: false,
  environment: 'Live',
  BASE_URL: 'https://liveapi.bharathexim.com/v1',
  SOCKET_ENDPONT: 'https://liveapi.bharathexim.com',
  ROLE_URL:'https://role.bharathexim.com',
  FRONT_END_URL:'https://www.bharathexim.com/',
  S3_BUCKET_URL:'https://www.bharathexim.com/',
  TALLY_API:"http://192.168.29.126:8083/",
  COUPON_API:"https://forexappapi.bharathexim.com/v1",
  ROLE_DELTA_TRADE_APP_API: "https://webapp.deltatradeglobal.com",
  appVersion: require('../../package.json').version,
};
