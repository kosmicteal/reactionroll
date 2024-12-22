import fs from 'fs';
import packageFile from './package.json' with {type: "json"};

const fullFile = fs.readFileSync('./CHANGELOG.md'); 
const fullFileString = fullFile.toString();

const startRecentChangelog = fullFileString.indexOf(packageFile.version);
const startRecentChangelogEndOfLine = fullFileString.indexOf("\n",startRecentChangelog);

const endChangelog = fullFileString.indexOf("### [",startRecentChangelog);

const currentChangelog = fullFileString.slice(startRecentChangelogEndOfLine,endChangelog).trim();

fs.writeFileSync('./public/minCHANGELOG.md', currentChangelog);