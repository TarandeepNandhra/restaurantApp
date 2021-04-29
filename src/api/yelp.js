import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer DcU25Q1PL9oksJpIGT13BIt3liQGv1urRHqRkWHh0ZlUiMToRCrVRplZIHyJ_LNmBeUr-90xSLKkQbwsbo75W_wwjhM_bq-dyv7juNBskBg0kwCuhob5vS2J8suKYHYx'
  }
});