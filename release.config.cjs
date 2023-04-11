module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "docs/CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["docs/CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version}"
      },
    ],
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
};