# roblox-ts-template

This is a template for a multiplace roblox game using roblox-ts, based off of [rbxts-multiplace-setup-flamework](https://github.com/imkalrbx/rbxts-multiplace-setup-flamework).

## Features

-   Roblox TS type checking
-   Support for multiple places, with shared code
-   Flamework

## Usage

1. Clone this repository `git clone https://github.com/C0mplexity0/roblox-ts-template.git`
2. Install dependencies `pnpm install`
3. Run `pnpm dev:main` to start Rojo and Roblox TS in watch mode

## Adding a new place

1. Clone the `places/main` directory and rename it to your new place name
2. Update the `default.project.json` file within your new directory to reflect its new name
3. Clone the `:main` scripts in `package.json` and update the paths to reflect your new place name

All of the code in `places/common` is shared between all places, along with any dependencies in `package.json`.
