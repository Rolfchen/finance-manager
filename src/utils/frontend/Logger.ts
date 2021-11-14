/* eslint-disable no-console */

/**
 * This is a placeholder class for future logging.
 * This should be the only class that should do console logs
 * in the system
 */
class Logger {
  public static error(message?: string, info?: unknown) {
    console.error(message, info);
  }

  public static debug(message?: string, info?: unknown) {
    console.debug(message, info);
  }

  public static info(message?: string, info?: unknown) {
    console.info(message, info);
  }
}

export default Logger;
