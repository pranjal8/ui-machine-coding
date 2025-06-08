import React, { useState} from "react";


const Tree = ({ nodes, level = 0 }) => {
  // Sort: directories first, then files; both alphabetically
  const sorted = [...nodes].sort((a, b) => {
    const aIsDir = !!a.children;
    const bIsDir = !!b.children;

    if (aIsDir && !bIsDir) return -1;
    if (!aIsDir && bIsDir) return 1;

    return a.name.localeCompare(b.name);
  });

  return (
    <ul style={{ listStyleType: "none", paddingLeft: level * 16 }}>
      {sorted.map((node) => (
        <TreeNode key={node.id} node={node} level={level} />
      ))}
    </ul>
  );
};

export default Tree;

function TreeNode({ node, level }) {
  const [expanded, setExpanded] = useState(false);
  const isDirectory = !!node.children;

  const toggle = () => {
    if (isDirectory) {
      setExpanded((prev) => !prev);
    }
  };

  return (
    <li>
      <div
        onClick={toggle}
        style={{
          cursor: isDirectory ? "pointer" : "default",
          fontWeight: isDirectory ? "bold" : "normal",
        }}
      >
        {isDirectory ? (expanded ? "📂" : "📁") : "📄"} {node.name}
      </div>
      {isDirectory && expanded && (
        <Tree nodes={node.children} level={level + 1} />
      )}
    </li>
  );
}
