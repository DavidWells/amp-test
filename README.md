<p align="center">
    <img src="public/ampt.svg" alt="ampt-logo" width="200"/>
    <img src="public/vite.svg" alt="vite-logo" width="200"/>
    <img src="public/react.svg" alt="react-logo" width="200"/>
</p>

## Welcome to Ampt!

[<img src="https://getampt.com/button"/>](https://ampt.dev/start?template=react-vite)

To run this app locally, simply clone down this repository and run `ampt`. You may need to login to the Ampt CLI if you haven't already (you can install this by running `npm install -g @ampt/cli`). To start the local development server, run `ampt dev` or `dev` in the Ampt shell.

All of the API routes are defined in `api/index.ts`, using Express.js. The frontend source code is in `src/`, and the React app is bundled with Vite.

Any outgoing requests from the app are proxied to your sandbox environment, so you can communicate with your live API while running the web app locally. You can see this configuration in `vite.config.ts`.

Happy coding!
