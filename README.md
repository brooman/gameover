# Gameover

Gameover is a multiplayer game made with p5 and socket.io

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy .env.example into .env and configure settings
4. Bulid the client: `npm run build`
5. Start the server: `npm run server`

## License

[MIT](LICENSE) ©️ [André Broman](https://github.com/brooman), [Samuel Johansson](https://github.com/websamuel90)

## Feedback from group 12
- In "src/classes/world/index.js", try not to instantiate classes in the update-function.
- Nice file structure, the code is easy to read due to separation into different files.
- Remember to delete unused code, see commented code in "index.html".
- Nice looking indentation.
- Maybe add a loading screen with instructions for how to play the game.
- It would be nice with more comments, it makes it easier for someone else to find things easily and understand your code.
- Great that you used an .editorconfig-file to keep the code clean.
- Really good names on variables and functions.
- Remember to keep it DRY, getRandomColor-function is declared in both "server/classes/Player/index.js" and "server/classes/Food/index.js".
- Very consistent code, we can't find anything to complain about!
