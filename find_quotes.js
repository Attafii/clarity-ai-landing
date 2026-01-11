const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\Ahmed Attafi\\Desktop\\Projects\\clarity-ai-landing\\clarity-ai-landing\\app\\api\\seed\\route.ts', 'utf8');

const regex = /(?<!')'(?!')/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const pos = match.index;
    const line = content.substring(0, pos).split('\n').length;
    const before = content.substring(Math.max(0, pos - 15), pos).replace(/\n/g, ' ');
    const after = content.substring(pos + 1, Math.min(content.length, pos + 16)).replace(/\n/g, ' ');
    console.log(`L${line}: ...${before} ['] ${after}...`);
}



