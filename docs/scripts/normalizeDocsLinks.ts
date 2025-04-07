// scripts/normalizeDocsLinks.js

const fs = require('fs');
const path = require('path');

const docsPath = path.join(__dirname, '../docs');

function walkAndRename(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkAndRename(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const oldName = entry.name;
      const newName = oldName.toLowerCase();
      const oldPath = path.join(dir, oldName);
      const newPath = path.join(dir, newName);

      if (oldPath !== newPath) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renomeado: ${oldName} → ${newName}`);
      }

      let content = fs.readFileSync(newPath, 'utf-8');
      content = content.replace(/\]\((\.\/)?([^)\s]+\.md)\)/g, (match, dotSlash, file) => {
        return match.replace(file, file.toLowerCase());
      });

      fs.writeFileSync(newPath, content, 'utf-8');
    }
  }
}

walkAndRename(docsPath);
console.log('✅ Arquivos renomeados e links atualizados!');
