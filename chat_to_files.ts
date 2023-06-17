function parseChat(chat: string): [string, string][] {
    const regex = /```(.*?)```/gs;
    const matches = chat.matchAll(regex);
  
    const files: [string, string][] = [];
    for (const match of matches) {
      const path = match[1].split('\n')[0];
      const code = match[1].split('\n').slice(1).join('\n');
      files.push([path, code]);
    }
  
    return files;
  }
  
  function toFiles(chat: string, workspace: Record<string, string>): void {
    workspace['all_output.txt'] = chat;
  
    const files = parseChat(chat);
    for (const [fileName, fileContent] of files) {
      workspace[fileName] = fileContent;
    }
  }