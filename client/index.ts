import readline from "node:readline";

type RequestOptions = {
  key: string;
  value?: string;
  action: "get" | "set";
  expiresIn?: number;
};
const request = (options: RequestOptions) => {
  fetch("http://localhost:3000", {
    body: JSON.stringify(options),
    method: "post",
  }).then((res) => {
    if (options.action === "get") {
      res.json().then((data) => {
        console.info(data);
      });
    }
  });
};

type SetOptions = {
  key: string;
  value: string;
};
const set = (options: SetOptions) => {
  request({
    ...options,
    action: "set",
    expiresIn: 60 * 1000,
  });
};

type GetOptions = {
  key: string;
};
const get = (options: GetOptions) => {
  request({
    ...options,
    action: "get",
  });
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  (async () => {
    try {
      const splitted = input.split(" ");
      if (splitted[0] === "get") {
        if (splitted.length > 2) {
          return;
        }

        await get({
          key: splitted[1],
        });
      }

      if (splitted[0] === "set") {
        if (splitted.length > 3) {
          return;
        }

        await set({
          key: splitted[1],
          value: splitted[2],
        });
      }
    } catch (error) {
      console.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  })();
});
