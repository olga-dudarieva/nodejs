//написать код, который выведет сколько процентов памяти свободно и запишет это значение в файл

const path = require("path");
const os = require("os");
const fs = require("fs");

const freeMem = os.freemem();
const totalMem = os.totalmem();
console.log("f: ", freeMem);
console.log("t: ", totalMem);

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "n/a";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  if (i == 0) return bytes + " " + sizes[i];
  return (bytes / Math.pow(1024, i)).toFixed(1) + "" + sizes[i];
}

function calcPercent(free, total) {
  return Math.round((100 * free) / total) + "%";
}

const convertedFreeSize = bytesToSize(freeMem);
const convertedTotalSize = bytesToSize(totalMem);
const percentSize = calcPercent(freeMem, totalMem);
const message = `На вашем устройстве свободно ${convertedFreeSize}, это составляет ${percentSize}.`;

console.log("convertedTotalSize: ", convertedTotalSize);
console.log("convertedFreeSize: ", convertedFreeSize);
console.log("percentSize: ", percentSize);

const filePath = path.join(__dirname, "memory.txt");
fs.writeFile(filePath, message, (err) => {
  if (err) console.log(err);
});
