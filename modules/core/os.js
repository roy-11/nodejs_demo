// * os
const os = require("os");

// arch
const arch = os.arch()
console.log(arch);
console.log(process.arch)

// cpu
const cpus = os.cpus()
console.log(cpus);

// memory
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(totalMemory, freeMemory);

// process
const targetPid = os.getPriority(0)
console.log(targetPid);

// network
const interfaces = os.networkInterfaces()
console.log(interfaces);

console.log(os.devNull);
console.log(os.EOL);
console.log(os.constants) // https://nodejs.org/dist/latest-v16.x/docs/api/os.html#os-constants
