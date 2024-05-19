// importing fs module to write logs to a file
import * as fs from "fs";

// instantiating a Logger class
/**
 * Represents a Logger class for printing colored messages to the console and saving them to a log file.
 */
class Logger {
  /**
   * Defines colors for the console output.
   */
  private colors: { [key: string]: string } = {
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    cyan: "\x1b[36m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    reset: "\x1b[0m",
  };

  /**
   * Stores the log file path.
   */
  private logFile: string | null = null;

  /**
   * Sets the log file path.
   * @param filePath - The path of the log file.
   */
  public setLogFile(filePath: string): void {
    this.logFile = filePath;
  }

  /**
   * Gets the current date and time.
   * @returns A string representing the current date and time.
   */
  private getCurrentDateTime(): string {
    const now = new Date();
    return now.toLocaleString();
  }

  /**
   * Formats the log message with the current date and time.
   * @param message - The log message to format.
   * @returns The formatted log message.
   */
  private formatMessage(message: string): string {
    const dateTime = this.getCurrentDateTime();
    return `[${dateTime}] ${message}`;
  }

  /**
   * Prints a colored message to the console.
   * @param color - The color of the message.
   * @param message - The message to print.
   */
  private printColoredMessage(color: string, message: string): void {
    const formattedMessage = this.formatMessage(message);
    const resetColor = this.colors.reset;
    const coloredMessage = `${this.colors[color]}${formattedMessage}${resetColor}`;
    console.log(coloredMessage);
    if (this.logFile) {
      this.saveToFile(formattedMessage);
    }
  }

  /**
   * Saves the log message to a file.
   * @param message - The log message to save.
   */
  public saveToFile(message: string): void {
    if (this.logFile) {
      fs.appendFileSync(this.logFile, `${message}\n`, { encoding: "utf8" });
    }
  }

  /**
   * Prints a red colored message to the console.
   * @param message - The message to print.
   */
  public red(message: string): void {
    this.printColoredMessage("red", message);
  }

  /**
   * Prints a yellow colored message to the console.
   * @param message - The message to print.
   */
  public yellow(message: string): void {
    this.printColoredMessage("yellow", message);
  }

  /**
   * Prints a green colored message to the console.
   * @param message - The message to print.
   */
  public green(message: string): void {
    this.printColoredMessage("green", message);
  }

  /**
   * Prints a cyan colored message to the console.
   * @param message - The message to print.
   */
  public cyan(message: string): void {
    this.printColoredMessage("cyan", message);
  }

  /**
   * Prints a blue colored message to the console.
   * @param message - The message to print.
   */
  public blue(message: string): void {
    this.printColoredMessage("blue", message);
  }

  /**
   * Prints a magenta colored message to the console.
   * @param message - The message to print.
   */
  public magenta(message: string): void {
    this.printColoredMessage("magenta", message);
  }

  /**
   * Prints a success level message to the console.
   * @param message - The message to print.
   */
  public success(message: string): void {
    this.printColoredMessage("green", `[SUCCESS] ${message}`);
  }

  /**
   * Prints a warning level message to the console.
   * @param message - The message to print.
   */
  public warning(message: string): void {
    this.printColoredMessage("yellow", `[WARNING] ${message}`);
  }

  /**
   * Prints an error level message to the console.
   * @param message - The message to print.
   */
  public error(message: string): void {
    this.printColoredMessage("red", `[ERROR] ${message}`);
  }

  /**
   * Prints an info level message to the console.
   * @param message - The message to print.
   */
  public info(message: string): void {
    this.printColoredMessage("cyan", `[INFO] ${message}`);
  }
}

const logger = new Logger();
export default logger;
