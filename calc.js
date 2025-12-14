//This file just a guide about "proccess.argv object"
//A Calculator CLI Tool 
const userargs = process.argv.slice(2);
if (userargs[3] || userargs.length !== 3) {
  console.log("Something is wrong");
  process.exit(1);
}
if (isNaN(userargs[0] || isNaN(userargs[2]))) {
  console.log("plz, Enter a valid number");
  process.exit(1);
}
const num1 = parseFloat(userargs[0]);
const num2 = parseFloat(userargs[2]);
const operator = userargs[1];

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      console.log("Cannot divide by zero");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  case "%":
    result = num1 % num2;
    break;
  case "^":
  case "**":
    result = Math.pow(num1, num2);
    break;
  default:
    console.log("Unknown operator. Available operators: +, -, *, /, %, ^, **");
    process.exit(1);
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
// console.log(process);

// Note: The 'process' object in Node.js is a global object that provides information about, and control over, the current Node.js process.
// It is an instance of the EventEmitter class, which means it can emit and listen for events.
// The 'process.argv' property is an array containing the command line arguments passed when the Node.js process was launched.
// The first element in the array is the path to the Node.js executable, the second element is the path to the JavaScript file being executed, and the remaining elements are any additional command line arguments.
// The 'process' object also provides other useful properties and methods, such as:
// - process.env: An object containing the user environment.
// - process.cwd(): Returns the current working directory of the Node.js process.
// - process.exit(): Exits the Node.js process.
// - process.memoryUsage(): Returns an object describing the memory usage of the Node.js process.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.hrtime(): Returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array.
// - process.platform: Returns the operating system platform for which the Node.js binary was compiled.
// - process.arch: Returns the operating system CPU architecture for which the Node.js binary was compiled.
// - process.pid: Returns the PID of the process.
// - process.title: Returns the current process's title.
// - process.version: Returns the Node.js version.
// - process.versions: Returns the version strings of Node.js and its dependencies.
// - process.config: Returns an Object containing the JavaScript representation of the configure options that were used to compile the current Node.js executable.
// - process.kill(): Sends a signal to a process.
// - process.nextTick(): Adds the callback to the "next tick queue".
// - process.abort(): Aborts the Node.js process.
// - process.chdir(): Changes the current working directory of the Node.js process.
// - process.cpuUsage(): Returns the user and system CPU time usage of the current process.
// - process.dlopen(): Loads the specified shared library.
// - process.emitWarning(): Triggers a process warning.
// - process.exitCode: A number which will be the process exit code, when the process exits gracefully.
// - process.features: An object containing the JavaScript representation of the Node.js features used to compile the current Node.js executable.
// - process.mainModule: Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.
// - process.release: An Object containing meta information about the current release, including URLs for the source tarball and headers-only tarball.
// - process.resourceUsage(): Returns an Object containing information about the memory, CPU time, and I/O usage of the current process.
// - process.setUncaughtExceptionCaptureCallback(): Sets a callback function that is called when an uncaught exception occurs.
// - process.stderr: A Writable Stream to stderr.
// - process.stdin: A Readable Stream for stdin.
// - process.stdout: A Writable Stream to stdout.
// - process.umask(): Sets or returns the process's file mode creation mask.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.versions: An object listing the versions of Node.js and its dependencies.
// - process.binding(): Returns the compiled-in binding for the given module.
// - process.config: An Object containing the JavaScript representation of the configure options that were used to compile the current Node.js executable.
// - process.constrainedMemory(): Returns the amount of memory constrained by the operating system.
// - process.cpuUsage(): Returns the user and system CPU time usage of the current process.
// - process.dlopen(): Loads the specified shared library.
// - process.emitWarning(): Triggers a process warning.
// - process.exitCode: A number which will be the process exit code, when the process exits gracefully.
// - process.features: An object containing the JavaScript representation of the Node.js features used to compile the current Node.js executable.
// - process.mainModule: Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.
// - process.release: An Object containing meta information about the current release, including URLs for the source tarball and headers-only tarball.
// - process.resourceUsage(): Returns an Object containing information about the memory, CPU time, and I/O usage of the current process.
// - process.setUncaughtExceptionCaptureCallback(): Sets a callback function that is called when an uncaught exception occurs.
// - process.stderr: A Writable Stream to stderr.
// - process.stdin: A Readable Stream for stdin.
// - process.stdout: A Writable Stream to stdout.
// - process.umask(): Sets or returns the process's file mode creation mask.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.versions: An object listing the versions of Node.js and its dependencies.
// - process.binding(): Returns the compiled-in binding for the given module.
// - process.config: An Object containing the JavaScript representation of the configure options that were used to compile the current Node.js executable.
// - process.constrainedMemory(): Returns the amount of memory constrained by the operating system.
// - process.cpuUsage(): Returns the user and system CPU time usage of the current process.
// - process.dlopen(): Loads the specified shared library.
// - process.emitWarning(): Triggers a process warning.
// - process.exitCode: A number which will be the process exit code, when the process exits gracefully.
// - process.features: An object containing the JavaScript representation of the Node.js features used to compile the current Node.js executable.
// - process.mainModule: Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.
// - process.release: An Object containing meta information about the current release, including URLs for the source tarball and headers-only tarball.
// - process.resourceUsage(): Returns an Object containing information about the memory, CPU time, and I/O usage of the current process.
// - process.setUncaughtExceptionCaptureCallback(): Sets a callback function that is called when an uncaught exception occurs.
// - process.stderr: A Writable Stream to stderr.
// - process.stdin: A Readable Stream for stdin.
// - process.stdout: A Writable Stream to stdout.
// - process.umask(): Sets or returns the process's file mode creation mask.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.versions: An object listing the versions of Node.js and its dependencies.
// - process.binding(): Returns the compiled-in binding for the given module.
// - process.config: An Object containing the JavaScript representation of the configure options that were used to compile the current Node.js executable.
// - process.constrainedMemory(): Returns the amount of memory constrained by the operating system.
// - process.cpuUsage(): Returns the user and system CPU time usage of the current process.
// - process.dlopen(): Loads the specified shared library.
// - process.emitWarning(): Triggers a process warning.
// - process.exitCode: A number which will be the process exit code, when the process exits gracefully.
// - process.features: An object containing the JavaScript representation of the Node.js features used to compile the current Node.js executable.
// - process.mainModule: Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.
// - process.release: An Object containing meta information about the current release, including URLs for the source tarball and headers-only tarball.
// - process.resourceUsage(): Returns an Object containing information about the memory, CPU time, and I/O usage of the current process.
// - process.setUncaughtExceptionCaptureCallback(): Sets a callback function that is called when an uncaught exception occurs.
// - process.stderr: A Writable Stream to stderr.
// - process.stdin: A Readable Stream for stdin.
// - process.stdout: A Writable Stream to stdout.
// - process.umask(): Sets or returns the process's file mode creation mask.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.versions: An object listing the versions of Node.js and its dependencies.
// - process.binding(): Returns the compiled-in binding for the given module.
// - process.config: An Object containing the JavaScript representation of the configure options that were used to compile the current Node.js executable.
// - process.constrainedMemory(): Returns the amount of memory constrained by the operating system.
// - process.cpuUsage(): Returns the user and system CPU time usage of the current process.
// - process.dlopen(): Loads the specified shared library.
// - process.emitWarning(): Triggers a process warning.
// - process.exitCode: A number which will be the process exit code, when the process exits gracefully.
// - process.features: An object containing the JavaScript representation of the Node.js features used to compile the current Node.js executable.
// - process.mainModule: Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.
// - process.release: An Object containing meta information about the current release, including URLs for the source tarball and headers-only tarball.
// - process.resourceUsage(): Returns an Object containing information about the memory, CPU time, and I/O usage of the current process.
// - process.setUncaughtExceptionCaptureCallback(): Sets a callback function that is called when an uncaught exception occurs.
// - process.stderr: A Writable Stream to stderr.
// - process.stdin: A Readable Stream for stdin.
// - process.stdout: A Writable Stream to stdout.
// - process.umask(): Sets or returns the process's file mode creation mask.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.versions: An object listing the versions of Node.js and its dependencies.
// - process.binding(): Returns the compiled-in binding for the given module.
// - process.config: An Object containing the JavaScript representation of the configure options that were used to compile the current Node.js executable.
// - process.constrainedMemory(): Returns the amount of memory constrained by the operating system.
// - process.cpuUsage(): Returns the user and system CPU time usage of the current process.
// - process.dlopen(): Loads the specified shared library.
// - process.emitWarning(): Triggers a process warning.
// - process.exitCode: A number which will be the process exit code, when the process exits gracefully.
// - process.features: An object containing the JavaScript representation of the Node.js features used to compile the current Node.js executable.
// - process.mainModule: Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.
// - process.release: An Object containing meta information about the current release, including URLs for the source tarball and headers-only tarball.
// - process.resourceUsage(): Returns an Object containing information about the memory, CPU time, and I/O usage of the current process.
// - process.setUncaughtExceptionCaptureCallback(): Sets a callback function that is called when an uncaught exception occurs.
// - process.stderr: A Writable Stream to stderr.
// - process.stdin: A Readable Stream for stdin.
// - process.stdout: A Writable Stream to stdout.
// - process.umask(): Sets or returns the process's file mode creation mask.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.versions: An object listing the versions of Node.js and its dependencies.
// - process.binding(): Returns the compiled-in binding for the given module.
// - process.config: An Object containing the JavaScript representation of the configure options that were used to compile the current Node.js executable.
// - process.constrainedMemory(): Returns the amount of memory constrained by the operating system.
// - process.cpuUsage(): Returns the user and system CPU time usage of the current process.
// - process.dlopen(): Loads the specified shared library.
// - process.emitWarning(): Triggers a process warning.
// - process.exitCode: A number which will be the process exit code, when the process exits gracefully.
// - process.features: An object containing the JavaScript representation of the Node.js features used to compile the current Node.js executable.
// - process.mainModule: Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.
// - process.release: An Object containing meta information about the current release, including URLs for the source tarball and headers-only tarball.
// - process.resourceUsage(): Returns an Object containing information about the memory, CPU time, and I/O usage of the current process.
// - process.setUncaughtExceptionCaptureCallback(): Sets a callback function that is called when an uncaught exception occurs.
// - process.stderr: A Writable Stream to stderr.
// - process.stdin: A Readable Stream for stdin.
// - process.stdout: A Writable Stream to stdout.
// - process.umask(): Sets or returns the process's file mode creation mask.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.versions: An object listing the versions of Node.js and its dependencies.
// - process.binding(): Returns the compiled-in binding for the given module.
// - process.config: An Object containing the JavaScript representation of the configure options that were used to compile the current Node.js executable.
// - process.constrainedMemory(): Returns the amount of memory constrained by the operating system.
// - process.cpuUsage(): Returns the user and system CPU time usage of the current process.
// - process.dlopen(): Loads the specified shared library.
// - process.emitWarning(): Triggers a process warning.
// - process.exitCode: A number which will be the process exit code, when the process exits gracefully.
// - process.features: An object containing the JavaScript representation of the Node.js features used to compile the current Node.js executable.
// - process.mainModule: Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.
// - process.release: An Object containing meta information about the current release, including URLs for the source tarball and headers-only tarball.
// - process.resourceUsage(): Returns an Object containing information about the memory, CPU time, and I/O usage of the current process.
// - process.setUncaughtExceptionCaptureCallback(): Sets a callback function that is called when an uncaught exception occurs.
// - process.stderr: A Writable Stream to stderr.
// - process.stdin: A Readable Stream for stdin.
// - process.stdout: A Writable Stream to stdout.
// - process.umask(): Sets or returns the process's file mode creation mask.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.versions: An object listing the versions of Node.js and its dependencies.
// - process.binding(): Returns the compiled-in binding for the given module.
// - process.config: An Object containing the JavaScript representation of the configure options that were used to compile the current Node.js executable.
// - process.constrainedMemory(): Returns the amount of memory constrained by the operating system.
// - process.cpuUsage(): Returns the user and system CPU time usage of the current process.
// - process.dlopen(): Loads the specified shared library.
// - process.emitWarning(): Triggers a process warning.
// - process.exitCode: A number which will be the process exit code, when the process exits gracefully.
// - process.features: An object containing the JavaScript representation of the Node.js features used to compile the current Node.js executable.
// - process.mainModule: Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.
// - process.release: An Object containing meta information about the current release, including URLs for the source tarball and headers-only tarball.
// - process.resourceUsage(): Returns an Object containing information about the memory, CPU time, and I/O usage of the current process.
// - process.setUncaughtExceptionCaptureCallback(): Sets a callback function that is called when an uncaught exception occurs.
// - process.stderr: A Writable Stream to stderr.
// - process.stdin: A Readable Stream for stdin.
// - process.stdout: A Writable Stream to stdout.
// - process.umask(): Sets or returns the process's file mode creation mask.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.versions: An object listing the versions of Node.js and its dependencies.
// - process.binding(): Returns the compiled-in binding for the given module.
// - process.config: An Object containing the JavaScript representation of the configure options that were used to compile the current Node.js executable.
// - process.constrainedMemory(): Returns the amount of memory constrained by the operating system.
// - process.cpuUsage(): Returns the user and system CPU time usage of the current process.
// - process.dlopen(): Loads the specified shared library.
// - process.emitWarning(): Triggers a process warning.
// - process.exitCode: A number which will be the process exit code, when the process exits gracefully.
// - process.features: An object containing the JavaScript representation of the Node.js features used to compile the current Node.js executable.
// - process.mainModule: Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.
// - process.release: An Object containing meta information about the current release, including URLs for the source tarball and headers-only tarball.
// - process.resourceUsage(): Returns an Object containing information about the memory, CPU time, and I/O usage of the current process.
// - process.setUncaughtExceptionCaptureCallback(): Sets a callback function that is called when an uncaught exception occurs.
// - process.stderr: A Writable Stream to stderr.
// - process.stdin: A Readable Stream for stdin.
// - process.stdout: A Writable Stream to stdout.
// - process.umask(): Sets or returns the process's file mode creation mask.
// - process.uptime(): Returns the number of seconds the current Node.js process has been running.
// - process.versions: An object listing the versions of Node.js and its dependencies.
// - process.binding(): Returns the
