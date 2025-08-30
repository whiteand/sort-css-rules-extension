import * as assert from "assert";
import { groupNodes } from "../groupNodes";
import { stringify } from "scss-parser";

const NODES = [
  {
    type: "space",
    value: `
    `,
    start: {
      cursor: 26,
      line: 1,
      column: 26,
    },
    next: {
      cursor: 31,
      line: 2,
      column: 4,
    },
  },
  {
    type: "declaration",
    value: [
      {
        type: "property",
        value: [
          {
            type: "operator",
            value: "-",
            start: {
              cursor: 31,
              line: 2,
              column: 4,
            },
            next: {
              cursor: 32,
              line: 2,
              column: 5,
            },
          },
          {
            type: "operator",
            value: "-",
            start: {
              cursor: 32,
              line: 2,
              column: 5,
            },
            next: {
              cursor: 33,
              line: 2,
              column: 6,
            },
          },
          {
            type: "identifier",
            value: "icon-color",
            start: {
              cursor: 33,
              line: 2,
              column: 6,
            },
            next: {
              cursor: 43,
              line: 2,
              column: 16,
            },
          },
        ],
        start: {
          cursor: 31,
          line: 2,
          column: 4,
        },
        next: {
          cursor: 43,
          line: 2,
          column: 16,
        },
      },
      {
        type: "punctuation",
        value: ":",
        start: {
          cursor: 43,
          line: 2,
          column: 16,
        },
        next: {
          cursor: 44,
          line: 2,
          column: 17,
        },
      },
      {
        type: "value",
        value: [
          {
            type: "space",
            value: " ",
            start: {
              cursor: 44,
              line: 2,
              column: 17,
            },
            next: {
              cursor: 45,
              line: 2,
              column: 18,
            },
          },
          {
            type: "color_hex",
            value: "C5D0DF",
            start: {
              cursor: 45,
              line: 2,
              column: 18,
            },
            next: {
              cursor: 52,
              line: 2,
              column: 25,
            },
          },
        ],
        start: {
          cursor: 44,
          line: 2,
          column: 17,
        },
        next: {
          cursor: 52,
          line: 2,
          column: 25,
        },
      },
      {
        type: "punctuation",
        value: ";",
        start: {
          cursor: 52,
          line: 2,
          column: 25,
        },
        next: {
          cursor: 53,
          line: 2,
          column: 26,
        },
      },
    ],
    start: {
      cursor: 31,
      line: 2,
      column: 4,
    },
    next: undefined,
  },
  {
    type: "space",
    value: " ",
    start: {
      cursor: 53,
      line: 2,
      column: 26,
    },
    next: {
      cursor: 54,
      line: 2,
      column: 27,
    },
  },
  {
    type: "comment_singleline",
    value: " TODO: this is out of palette, should be updated",
    start: {
      cursor: 54,
      line: 2,
      column: 27,
    },
    next: {
      cursor: 104,
      line: 2,
      column: 77,
    },
  },
  {
    type: "space",
    value: `
    `,
    start: {
      cursor: 104,
      line: 2,
      column: 77,
    },
    next: {
      cursor: 109,
      line: 3,
      column: 4,
    },
  },
  {
    type: "declaration",
    value: [
      {
        type: "property",
        value: [
          {
            type: "operator",
            value: "-",
            start: {
              cursor: 109,
              line: 3,
              column: 4,
            },
            next: {
              cursor: 110,
              line: 3,
              column: 5,
            },
          },
          {
            type: "operator",
            value: "-",
            start: {
              cursor: 110,
              line: 3,
              column: 5,
            },
            next: {
              cursor: 111,
              line: 3,
              column: 6,
            },
          },
          {
            type: "identifier",
            value: "border-color",
            start: {
              cursor: 111,
              line: 3,
              column: 6,
            },
            next: {
              cursor: 123,
              line: 3,
              column: 18,
            },
          },
        ],
        start: {
          cursor: 109,
          line: 3,
          column: 4,
        },
        next: {
          cursor: 123,
          line: 3,
          column: 18,
        },
      },
      {
        type: "punctuation",
        value: ":",
        start: {
          cursor: 123,
          line: 3,
          column: 18,
        },
        next: {
          cursor: 124,
          line: 3,
          column: 19,
        },
      },
      {
        type: "value",
        value: [
          {
            type: "space",
            value: " ",
            start: {
              cursor: 124,
              line: 3,
              column: 19,
            },
            next: {
              cursor: 125,
              line: 3,
              column: 20,
            },
          },
          {
            type: "function",
            value: [
              {
                type: "identifier",
                value: "var",
                start: {
                  cursor: 125,
                  line: 3,
                  column: 20,
                },
                next: {
                  cursor: 128,
                  line: 3,
                  column: 23,
                },
              },
              {
                type: "arguments",
                value: [
                  {
                    type: "operator",
                    value: "-",
                    start: {
                      cursor: 129,
                      line: 3,
                      column: 24,
                    },
                    next: {
                      cursor: 130,
                      line: 3,
                      column: 25,
                    },
                  },
                  {
                    type: "operator",
                    value: "-",
                    start: {
                      cursor: 130,
                      line: 3,
                      column: 25,
                    },
                    next: {
                      cursor: 131,
                      line: 3,
                      column: 26,
                    },
                  },
                  {
                    type: "identifier",
                    value: "color-primary",
                    start: {
                      cursor: 131,
                      line: 3,
                      column: 26,
                    },
                    next: {
                      cursor: 144,
                      line: 3,
                      column: 39,
                    },
                  },
                ],
                start: {
                  cursor: 128,
                  line: 3,
                  column: 23,
                },
                next: {
                  cursor: 145,
                  line: 3,
                  column: 40,
                },
              },
            ],
            start: {
              cursor: 125,
              line: 3,
              column: 20,
            },
            next: {
              cursor: 145,
              line: 3,
              column: 40,
            },
          },
        ],
        start: {
          cursor: 124,
          line: 3,
          column: 19,
        },
        next: {
          cursor: 145,
          line: 3,
          column: 40,
        },
      },
      {
        type: "punctuation",
        value: ";",
        start: {
          cursor: 145,
          line: 3,
          column: 40,
        },
        next: {
          cursor: 146,
          line: 3,
          column: 41,
        },
      },
    ],
    start: {
      cursor: 109,
      line: 3,
      column: 4,
    },
    next: undefined,
  },
  {
    type: "space",
    value: `
`,
    start: {
      cursor: 146,
      line: 3,
      column: 41,
    },
    next: {
      cursor: 147,
      line: 4,
      column: 0,
    },
  },
];

suite("groupNodes", () => {
  test("Sample test", () => {
    const groups = groupNodes(NODES);
    const groupsStrings = groups.map(
      (x) => `${x.property}:${stringify({ type: "block", value: x.nodes })}`
    );
    console.log(stringify({ type: "block", value: NODES }));
    assert.equal(groupsStrings, [
      "--icon-color:{\n    --icon-color: rgba(197, 208, 223, 1);} // TODO: this is out of palette, should be updated\n    ",
      "--border-color:{--border-color: var(--color-primary);\n}",
    ]);
  });
});
