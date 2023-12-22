function tannenbaumZeichnen(height) {
  const leaf = "X";
  const trunk = "I";
  const star = "*";
  const whitespace = " ";

  const treeTip = whitespace.repeat(height - 1) + star + "\n";

  let treeBody = "";
  for (let line = 1; line <= height; line++) {
    treeBody += `${whitespace.repeat(height - line)}${leaf.repeat(line + (line - 1))}\n`;
  }

  const treeTrunk = whitespace.repeat(height - 1) + trunk;

  return `${treeTip}${treeBody}${treeTrunk}`;
}

const tree = tannenbaumZeichnen(5);
console.log(`\n${tree}\n`);
