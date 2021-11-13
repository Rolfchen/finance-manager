/* eslint-disable no-console */

/**
 * This is a placeholder class for future logging.
 * This should be the only class that should do console logs
 * in the system
 */
class Logger {
  public static error(message?: string) {
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.error(message);
  }

  public static debug(message?: string) {
    console.debug(message);
  }

  public static info(message?: string) {
    console.info(message);
  }
}

export default Logger;
