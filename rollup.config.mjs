import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import svg from "rollup-plugin-svg";
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
            PeerDepsExternalPlugin(),
            resolve({ preferBuiltins: true }),
            commonjs(),
            svg(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),
            terser(),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: ["storybook/**", "react-dom", "**/*.css", /\.css$/,],
    },
];
