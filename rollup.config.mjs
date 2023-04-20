import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import dts from "rollup-plugin-dts";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import terser from '@rollup/plugin-terser';

import packageJson from "./package.json" assert { type: "json" };

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            json(),
            commonjs(),
            PeerDepsExternalPlugin(),
            resolve({ preferBuiltins: true }),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),
            terser(),
        ],
        external: ["storybook/**", "react-dom", "assets", "othent"],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: ["storybook/**", "react-dom", "assets", /\.css$/,],
    },
];
