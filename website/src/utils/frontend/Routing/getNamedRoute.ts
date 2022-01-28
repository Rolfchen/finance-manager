const routeCollection = {
  resetPassword: `/user/reset-password`,
  forgotPassword: `/user/forgot-password`,
  login: `/login`,
} as const;

export type RouteKey = keyof typeof routeCollection;
/**
 * Return internal route based on names
 * @param routeName
 */
const getNamedRoute = (routeName: RouteKey) => {
  return routeCollection?.[routeName];
};

export default getNamedRoute;
