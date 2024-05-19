<h1>📃 Logger - Developed by 1blckhrt</h1>

<p>A simple TypeScript logger utility class that prints colored messages to the console and timestamps, with the option of saving a message to a file.

<h2>Installation</h2>

<p>You can install my logger program using npm:</p>

```sh
npm install @1blckhrt_/tslogger
```

<h2>Basic usage</h2>

<h3>Importing</h3>

```js
const { logger } = require("@1blckhrt_/tslogger");
import { logger } from "@1blckhrt_/tslogger";
```

<h3>Logging to files</h3>

```js
logger.setLogFile("log.txt"); // setting the file to log to
logger.saveToFile("Hello World!"); // saving the message
```

<h3>Printing colored messages to the console</h3>

```js
logger.red("This is a red message");
logger.yellow("This is a yellow message");
logger.green("This is a green message");
logger.cyan("This is a cyan message");
logger.blue("This is a blue message");
logger.magenta("This is a magenta message");
```

<h3>Printing levelled messages to the console</h3>

```js
logger.error("This is an error message");
logger.warning("This is a warning message");
logger.info("This is an info message");
logger.success("This is a success message");
```

# Thank you for checking out my program, I hope it is useful.
