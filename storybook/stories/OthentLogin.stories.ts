import type { Meta, StoryObj } from "@storybook/react";

import { OthentLogin, ModalLocation } from "../../src/index";

const meta = {
  title: "Othent/OthentLogin",
  component: OthentLogin,
  tags: ["autodocs"],
  argTypes: {
    location: {
      options: [
        "top",
        "bottom",
        "right",
        "left",
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
      ],
      mapping: {
        top: ModalLocation.top,
        right: ModalLocation.right,
        bottom: ModalLocation.bottom,
        left: ModalLocation.left,
        "top-right": ModalLocation["top-right"],
        "top-left": ModalLocation["top-left"],
        "bottom-right": ModalLocation["bottom-right"],
        "bottom-left": ModalLocation["bottom-left"],
      },
    },
  },
} satisfies Meta<typeof OthentLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  // args: {
  //   location: ModalLocation.bottom,
  // },
};
